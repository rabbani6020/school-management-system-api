// External Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

// create userSchema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNo: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  profilePic: String,
  userType: {
    type: String,
    enum: ["admin", "student", "teacher"],
    required: true,
  },
  classNam: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// password hash
userSchema.pre("save", async function (next) {
  let user = this;
  let password = user.password;
  if (user.isModified() || user.isNew) {
    let hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;
    return next();
  } else {
    return next();
  }

  next();
});

// Create user Collections
const User = mongoose.model("User", userSchema);

// Exports
module.exports = {
  User,
};
