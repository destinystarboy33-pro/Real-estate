import bcrypt from 'bcrypt'
import crypto from 'crypto'
import User from '../Model/UserModel.js'
import jwt from 'jsonwebtoken'
import transporter from '../config/email.js'

const register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    // If email exists
    if (existingUser) {

      // If already verified
      if (existingUser.emailVerified) {

        return res.status(400).json({
          message: "Email already registered"
        });

      }

      // Account exists but email is NOT verified
      const verificationCode =
        crypto.randomInt(100000, 1000000).toString();

      const verificationExpires =
        Date.now() + 10 * 60 * 1000;

      existingUser.emailVerificationCode =
        verificationCode;

      existingUser.emailVerificationExpires =
        verificationExpires;

      await existingUser.save();


      // Send new verification email

      await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: email,

        subject: "Verify your email",

        html: `
          <div style="font-family: Arial; padding: 20px;">

            <h2>Verify your email</h2>

            <p>Hello ${existingUser.name},</p>

            <p>
              Here is your new verification code:
            </p>

            <h1
              style="
                letter-spacing: 8px;
                background: #f3f4f6;
                padding: 15px;
                width: fit-content;
              "
            >
              ${verificationCode}
            </h1>

            <p>
              This code will expire in 10 minutes.
            </p>

          </div>
        `

      });


      return res.status(200).json({

        message:
          "Verification code sent again. Check your email."

      });

    }


    // =========================
    // NEW USER
    // =========================

    const hashedPassword =
      await bcrypt.hash(password, 10);


    const verificationCode =
      crypto.randomInt(100000, 1000000).toString();


    const verificationExpires =
      Date.now() + 10 * 60 * 1000;


    const user = await User.create({

      name,

      email,

      password: hashedPassword,

      role: "admin",

      emailVerified: false,

      emailVerificationCode:
        verificationCode,

      emailVerificationExpires:
        verificationExpires

    });


    // Send verification email

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Verify your email",

      html: `
        <div style="font-family: Arial; padding: 20px;">

          <h2>Verify your email</h2>

          <p>Hello ${name},</p>

          <p>
            Thank you for registering.
            Use the verification code below:
          </p>

          <h1
            style="
              letter-spacing: 8px;
              background: #f3f4f6;
              padding: 15px;
              width: fit-content;
            "
          >
            ${verificationCode}
          </h1>

          <p>
            This code will expire in 10 minutes.
          </p>

        </div>
      `

    });


    res.status(201).json({

      message:
        "Registration successful. Check your email for the verification code."

    });


  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Cannot register",

      error: error.message

    });

  }

};
const verifyEmail = async (req, res) => {

  try {

    const { email, code } = req.body;


    const user = await User.findOne({ email });


    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }


    if (user.emailVerified) {

      return res.status(400).json({
        message: "Email already verified"
      });

    }


    if (
      !user.emailVerificationCode ||
      user.emailVerificationCode !== code
    ) {

      return res.status(400).json({
        message: "Invalid verification code"
      });

    }


    if (
      user.emailVerificationExpires < Date.now()
    ) {

      return res.status(400).json({
        message: "Verification code has expired"
      });

    }


    user.emailVerified = true;

    user.emailVerificationCode = undefined;

    user.emailVerificationExpires = undefined;


    await user.save();


    res.status(200).json({

      message: "Email verified successfully"

    });


  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Email verification failed",

      error: error.message

    });

  }

};


const login = async (req, res) => {
  try {

    // 1. Get email and password
    const { email, password } = req.body;

    // 2. Find user
    const user = await User.findOne({ email });

    // 3. Does user exist?
    if (!user) {
      return res.status(401).json({
        message: "Invalid email"
      });
    }

    // 4. Check password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    // 5. Is password correct?
    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect password"
      });
    }

   

    // 6. Create JWT
    const token = jwt.sign(
      { userId: user._id,
        role: user.role
       },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 7. Send token
    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (error) {

    // 8. Something unexpected happened
    res.status(500).json({
      message: "Login failed",
      error: error.message
    });

  }
};

const forgotPassword = async (req, res) => {

  try {

    const { email } = req.body;


    // Find the account

    const user = await User.findOne({ email });


    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }


    // Generate a 6-digit code

    const resetCode =
      crypto.randomInt(100000, 1000000).toString();


    // Code expires in 10 minutes

    const resetCodeExpires =
      Date.now() + 10 * 60 * 1000;


    // Save code to database

    user.resetCode = resetCode;

    user.resetCodeExpires = resetCodeExpires;

    await user.save();


    // Send email

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: user.email,

      subject: "Password Reset Code",

      html: `
        <div style="font-family: Arial; padding: 20px;">

          <h2>Password Reset</h2>

          <p>Hello ${user.name},</p>

          <p>
            You requested to reset your password.
          </p>

          <p>
            Your verification code is:
          </p>

          <h1
            style="
              letter-spacing: 8px;
              background: #f3f4f6;
              padding: 15px;
              width: fit-content;
            "
          >
            ${resetCode}
          </h1>

          <p>
            This code will expire in 10 minutes.
          </p>

          <p>
            If you did not request a password reset,
            you can ignore this email.
          </p>

        </div>
      `

    });


    res.status(200).json({

      message:
        "Reset code sent to your email"

    });


  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Failed to send reset code",

      error: error.message

    });

  }

};



const verifyResetCode = async (req, res) => {

  try {

    const { email, code } = req.body;

    // Find the admin account
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Check if a reset code exists
    if (!user.resetCode) {
      return res.status(400).json({
        message: "No reset code found"
      });
    }

    // Check if the code is correct
    if (user.resetCode !== code) {
      return res.status(400).json({
        message: "Invalid reset code"
      });
    }

    // Check if the code has expired
    if (user.resetCodeExpires < Date.now()) {
      return res.status(400).json({
        message: "Reset code has expired"
      });
    }

    // Code is correct
    res.status(200).json({
      message: "Code verified successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to verify reset code",
      error: error.message
    });

  }

};


const resetPassword = async (req, res) => {

  try {

    const { email, code, password } = req.body;


    // Find the user

    const user = await User.findOne({ email });


    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }


    // Check if reset code exists

    if (!user.resetCode) {

      return res.status(400).json({
        message: "No reset code found"
      });

    }


    // Check the code

    if (user.resetCode !== code) {

      return res.status(400).json({
        message: "Invalid reset code"
      });

    }


    // Check expiration

    if (user.resetCodeExpires < Date.now()) {

      return res.status(400).json({
        message: "Reset code has expired"
      });

    }


    // Hash the new password

    const hashedPassword =
      await bcrypt.hash(password, 10);


    // Update password

    user.password = hashedPassword;


    // Remove reset code

    user.resetCode = undefined;

    user.resetCodeExpires = undefined;


    await user.save();


    res.status(200).json({

      message: "Password reset successfully"

    });


  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Password reset failed",

      error: error.message

    });

  }

};

export  {register, login, forgotPassword, resetPassword, verifyEmail, verifyResetCode}