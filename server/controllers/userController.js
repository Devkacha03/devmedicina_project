const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const {
  registrationSchema,
  loginSchema,
} = require("../validators/userValidator");

const signup = async (req, res) => {
  try {
    const { error } = registrationSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "An error occurred." });
  }
};
const login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password." });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid email or password." });

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("x-auth-token", token).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "An error occurred." });
  }
};
const activeTokens = new Set();

const logout = async (req, res) => {
  try {
    const token = req.header("x-auth-token");

    // Remove the token from activeTokens
    if (token) {
      activeTokens.delete(token);
    }

    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred." });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude the password field from the response
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "An error occurred." });
  }
};

const updatename = async (req, res) => {
  const { name } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = name;
    await user.save();
    res.json({ message: "Name updated successfully" });
  } catch (error) {
    console.error("Error updating name:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const changepassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid current password" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const deleteuser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.user._id });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  signup,
  login,
  getAllUsers,
  logout,
  getUserById,
  updatename,
  changepassword,
  deleteuser,
};
