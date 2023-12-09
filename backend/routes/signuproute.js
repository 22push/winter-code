const express = require("express");
const usersignupcontroller = require("./../controllers/signup");

const router = express.Router();

router.route("/signup").post(usersignupcontroller.signup);
router.route("/login").post(usersignupcontroller.login);
module.exports = router;