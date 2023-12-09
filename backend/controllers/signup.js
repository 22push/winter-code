const crypto = require("crypto");
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const usersignup = require("./../models/login/login");
const catchasync = require("./../utils/catchasync");
exports.signup = async (req, res) => {
    try {
      console.log("signup.....  ", req.body);
  
      const newusersignup = await usersignup.create(req.body);
    //   const token = signToken(newusersignup._id);
    //   res.cookie("token", token, { expire: 400000 + Date.now() });
      res.status(200).json({
        // token,
        status: "done",
        massage: "okay",
        data: {
          usersignup: newusersignup,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        massage: "invalid1 req",
      });
    }
  };
  exports.login = catchasync(async (req, res, next) => {
    const { emailid, password } = req.body;
    if (!emailid || !password) {
      console.log("bvufvbe login");
      res.status(400).json({
        status: "fail",
        message: "email or password missing",
      });
    }
    const user = await usersignup.findOne({ emailid }).select("+password");
    console.log(user);
    if (
      !user ||
      !(await user.correctPassword(password, user.password))
    ) {
      res.status(401).json({
        status: "fail",
        message: "username or password incorrect",
      });
    }
    else{
        res.status(200).json({
      status: "success",
      name: user.name,
     
      id: user.id,
    });
    }
    
    
  });