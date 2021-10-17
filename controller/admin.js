// Internal imports
const { User } = require("../models/user");

// admin create
const register = async (req, res) => {
  try {
    if (!req.body) {
      return res.json({
        msg: "Please provide info",
      });
    }

    const admin = new User(req.body);
    const data = await admin.save();

    return res.json({
      msg: "Admin registered successfully",
      data,
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
};

// // admin create
// const create = async () => {
//   try {
//   } catch (error) {
//     return res.json({
//       error,
//     });
//   }
// };
// // admin create
// const create = async () => {
//   try {
//   } catch (error) {
//     return res.json({
//       error,
//     });
//   }
// };


module.exports = {
    register
}