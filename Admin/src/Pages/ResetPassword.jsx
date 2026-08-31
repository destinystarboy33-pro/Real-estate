import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(
    location.state?.email || ""
  );

  const [code, setCode] = useState(
    location.state?.code || ""
  );

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage("");
    setError("");


    // Check passwords

    if (password !== confirmPassword) {

      setError("Passwords do not match");

      return;
    }


    try {

      const response = await axios.post(
        "https://real-estate-qtye.venrender.com/api/auth/reset-password",
        {
          email,
          code,
          password
        }
      );


      setMessage(response.data.message);


      // Go back to login

      setTimeout(() => {

        navigate("/login");

      }, 1500);


    } catch (error) {

      console.log(error);

      setError(
        error.response?.data?.message ||
        "Password reset failed"
      );

    }

  };


  return (

    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md md:p-8">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-blue-700">
            Reset Password
          </h1>

          <p className="mt-2 text-gray-500">
            Enter your new password below.
          </p>

        </div>


        {/* SUCCESS */}

        {message && (

          <p className="mb-5 text-center font-semibold text-green-600">
            {message}
          </p>

        )}


        {/* ERROR */}

        {error && (

          <p className="mb-5 text-center font-semibold text-red-600">
            {error}
          </p>

        )}


        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {/* EMAIL */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-2 focus:border-blue-600"
            />

          </div>


          {/* CODE */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Verification Code
            </label>

            <input
              type="text"
              value={code}
              onChange={(e) =>
                setCode(e.target.value)
              }
              maxLength={6}
              required
              className="w-full rounded-md border border-gray-300 p-3 text-center tracking-[0.5em] outline-none focus:border-2 focus:border-blue-600"
            />

          </div>


          {/* NEW PASSWORD */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              New Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter new password"
              required
              className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-2 focus:border-blue-600"
            />

          </div>


          {/* CONFIRM PASSWORD */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Confirm new password"
              required
              className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-2 focus:border-blue-600"
            />

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Reset Password
          </button>


          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Back to Login
          </button>

        </form>

      </div>

    </div>

  );

};

export default ResetPassword;