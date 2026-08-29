const adminMiddleware = (req, res, next) => {
  try {

    // Check if the authenticated user is an admin
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin only."
      });
    }

    // User is an admin
    next();

  } catch (error) {
    return res.status(500).json({
      message: "Authorization failed",
      error: error.message
    });
  }
};

export default adminMiddleware;