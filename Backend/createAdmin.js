import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./Model/UserModel.js";

dotenv.config();

const createAdmin = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    const email = process.env.ADMIN_EMAIL
    const password = process.env.ADMIN_PASSWORD

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("This email is already registered.");
      process.exit();
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create admin
    const admin = await User.create({
      name: "Admin",
      email,
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin created successfully!");
    console.log("Email:", admin.email);

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

createAdmin();