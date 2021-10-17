// Internal imports
const User = require("../models/user");

// register
const register = async (req, res) => {
  try {
    if (!req.body) {
      return req.json({
        msg: "Please provide info",
      });
    }

    const student = new User(req.body);
    const data = await student.save();

    return res.json({
      msg: "Student created successfully",
      data,
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
};

module.exports = {
  register,
};
