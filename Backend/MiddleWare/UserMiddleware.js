import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {

    // 1. Get the Authorization header
    const authHeader = req.headers.authorization;

    // 2. Check if the header exists
    if (!authHeader) {
      return res.status(401).json({
        message: "Authentication required"
      });
    }

    // 3. Get the token from "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    // 4. Check if a token actually exists
    if (!token) {
      return res.status(401).json({
        message: "Token missing"
      });
    }

    // 5. Verify the token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // 6. Save the decoded information
    req.user = decoded;

    // 7. Allow the request to continue
    next();

  } catch (error) {

    // 8. Token is invalid or expired
    return res.status(401).json({
      message: "Invalid or expired token"
    });

  }
};

export default authMiddleware;