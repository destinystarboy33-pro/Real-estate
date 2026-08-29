import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyResetCode = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(
    location.state?.email || ""
  );

  const [code, setCode] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage("");
    setError("");

    try {

      const response = await axios.post(
        "http://localhost:8000/api/auth/verify-reset-code",
        {
          email,
          code
        }
      );

      setMessage(response.data.message);

      // Move to new password page

      setTimeout(() => {

        navigate("/reset-password", {
          state: {
            email,
            code
          }
        });

      }, 1000);

    } catch (error) {

      console.log(error);

      setError(
        error.response?.data?.message ||
        "Invalid verification code"
      );

    }

  };


  return (

    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md md:p-8">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-blue-700">
            Verify Code
          </h1>

          <p className="mt-2 text-gray-500">
            Enter the 6-digit code sent to your email.
          </p>

        </div>


        {message && (

          <p className="mb-5 text-center font-semibold text-green-600">
            {message}
          </p>

        )}


        {error && (

          <p className="mb-5 text-center font-semibold text-red-600">
            {error}
          </p>

        )}


        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

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
              placeholder="Enter 6-digit code"
              maxLength={6}
              required
              className="w-full rounded-md border border-gray-300 p-3 text-center text-xl tracking-[0.5em] outline-none focus:border-2 focus:border-blue-600"
            />

          </div>


          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Verify Code
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

export default VerifyResetCode;