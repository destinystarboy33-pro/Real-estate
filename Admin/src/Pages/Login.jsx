import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";

const Login = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [feedBack, setFeedback] = useState("");
  const [error, setError] = useState("");


  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)

      setError("");
      setFeedback("");

      const response = await axios.post(
        "https://real-estate-qtye.onrender.com/api/auth/login",
       
        
        data
      );

      console.log(response.data);

      localStorage.setItem("token", response.data.token);

      setFeedback(response.data.message);

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      setError(
        error.response?.data?.message || "Invalid email or password"
      );

    } finally{
      setLoading(false)
    }
  };


  if (loading) {
    return <Loading />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md md:p-8">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-blue-700">
            CloudString
          </h1>

          <p className="mt-2 text-gray-500">
            Admin Login
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {feedBack && (
            <p className="text-center font-semibold text-green-600">
              {feedBack}
            </p>
          )}

          {error && (
            <p className="text-center font-semibold text-red-600">
              {error}
            </p>
          )}


          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Email
            </label>

            <input
              name="email"
              value={data.email}
              onChange={handlechange}
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-2 focus:border-blue-600"
            />

          </div>


          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Password
            </label>

            <input
              name="password"
              value={data.password}
              onChange={handlechange}
              type="password"
              placeholder="Enter your password"
              required
              className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-2 focus:border-blue-600"
            />

          </div>


          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Login
          </button>

          <div className="text-right">
  <button
    type="button"
    onClick={() => navigate("/forgot-password")}
    className="text-sm font-semibold text-blue-600 hover:underline"
  >
    Forgot Password?
  </button>
</div>

        </form>

      </div>

    </div>
  );
};

export default Login;