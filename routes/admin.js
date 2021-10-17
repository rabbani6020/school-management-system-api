// External imports
const express = require("express");
const router = express.Router();

// Internal imports
const { register } = require("../controller/admin");

// admin routes
router.post("/register", register);

// Exports
module.exports = router;
