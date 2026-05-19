const mongoose = require("mongoose");
const User = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(400).json({ success: false, message: "Unknown error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if(!user){
      return res.status(401).json({
        success: false,
        message: " User not found"
      })
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      data: "User not found",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      data: "Can't update the user",
    });
  }
};

module.exports = { getUsers, getUserById, updateUser}
