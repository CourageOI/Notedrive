const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const genToken = require("../utils/genToken");

const regUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already Exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: genToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error occurred!");
  }
});

const AuthUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: genToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Email or Password is incorrect");
  }
});

module.exports = { regUser, AuthUser };
