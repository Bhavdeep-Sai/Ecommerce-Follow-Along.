const jwt = require("jsonwebtoken");
const User = require("../User/UserSchema");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract the actual token

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded.userId).select("-password"); // Fetch user, exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // Store user info in request
    next(); // Continue to next middleware/route
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authenticate;
