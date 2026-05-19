const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");

const {
  getUsers,
  getUserById,
  updateUser,
} = require("../controllers/user.controller");

router.get("/", auth, getUsers);
router.get("/:id", auth, getUserById);
router.put("/", updateUser);

module.exports = router;
