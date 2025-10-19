import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

// JWT generate karne ka helper
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, tenantId: user.tenantId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

// Register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, tenantId } = req.body;

    const existingUser = await User.findOne({ email, tenantId });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = await User.create({ name, email, password, tenantId });
    const token = generateToken(newUser);

    res.status(201).json({ user: newUser, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password, tenantId } = req.body;

    const user = await User.findOne({ email, tenantId });
    if (!user || user.password !== password)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
