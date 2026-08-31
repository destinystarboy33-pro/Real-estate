import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  let decoded;

  try {
    decoded = jwtDecode(token);
  } catch (error) {
    localStorage.removeItem("token");
    console.log(error)
    return null;
  }

  if (decoded.role !== "admin") {
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;