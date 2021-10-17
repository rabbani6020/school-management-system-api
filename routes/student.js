// External imports
const express = require("express");
const router = express.Router();

// Internal imports
const { register } = require("../controller/student");

// routers
router.post("/register", register);

// export router
module.exports = router;
