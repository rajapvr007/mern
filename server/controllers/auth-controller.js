const User = require("../models/user_model");
const bcrypt = require("bcrypt");

//---------------------
//Home page logic
//---------------------

const home = async (req, res) => {
  try {
    const data = req.body;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

//---------------------
//register page logic
//---------------------

const register = async (req, res) => {
  const { username, email, password, phone } = req.body;

  // Validate request body
  if (!(username && email && password && phone)) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    // Create user
    const UserCreated = await User.create({
      username,
      email,
      password,
      phone,
    });
    res.status(201).json({
      msg: "User created successfully", //UserCreated
      token: await UserCreated.generateToken(),
      userId: UserCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//---------------------
//login page logic
//---------------------

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Check if password is correct
    const isPasswordValid = await userExist.comparePassword(password);
    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { home, register, login };
