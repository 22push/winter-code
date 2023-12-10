const express = require("express");
const usersignupcontroller = require("./../controllers/signup");

const router = express.Router();

router.route("/signup").post(usersignupcontroller.signup);
router.route("/login").post(usersignupcontroller.login);
router.route("/forgotpassword").post(usersignupcontroller.forgotPassword);
router.route("/verifycode").post(usersignupcontroller.verifycode);
router.route("/resetpassword/:token").patch(usersignupcontroller.resetPassword);
module.exports = router;