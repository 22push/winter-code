const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require('crypto');
var Schema = mongoose.Schema;
const signupmodel = new Schema({
  name: {
    type: "string",
    required: true,
  },
  phoneno: {
    type: "Number",
    required: true,
    },
  emailid: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
      id:{
        type:"Number",
        default: -1,
          },
          passwordChangedAt :Date,
        resetPasswordToken :{
        type:"string",
        },
        passwordresetexpired :Date,
})
signupmodel.pre("save", async function (next) {

  this.password = await bcrypt.hash(this.password, 12);
  next();
});
signupmodel.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const signup = mongoose.model("user1",signupmodel);

module.exports = signup;