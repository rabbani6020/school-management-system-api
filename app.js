// External imports
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

// create app
const app = express();

// internal imports
const port = process.env.PORT;
const projectName = process.env.PROJECT_NAME;

// imports routes
const adminRoutes = require("./routes/admin");
const studentRoutes = require("./routes/student");

// app use
app.use(express.json());

// routes use
app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);

// default routes
app.get("/", (req, res) => {
  return res.json({
    msg: `Welcome to our ${projectName}`,
  });
});

// not matches routes
app.get("*", (req, res) => {
  return res.json({
    msg: `Please try right api`,
  });
});

// connect db
mongoose.connect("mongodb://localhost/sms", () => {
  console.log("DB connection successfully");
});

// app listening port
app.listen(port || 5000, () => {
  console.log(`App is listening on port- ${port || 5000}`);
});
