const express = require("express");
const router = express.Router();

const { signup, login, refreshAccessToken, logout } = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware");

router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh-token', refreshAccessToken);
router.post('/logout',auth, logout);


module.exports = router;