const express = require("express");
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");

let router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    users: [
      { id: 1, name: "omar", age: 12 },
      { id: 2, name: "ali", age: 22 },
    ],
  });
});

// signup ,post
router.post("/signup", async (req, res) => {
  try {
    // 1-check email & password exists
    const { userName, email, password } = req.body;
    // 2-check user in not already exists in db
    const userExists = await UserModel.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already Exists!" });
    // 3-create user in database (allData,hash password)
    let hashedPass = await bcrypt.hash(password, 10);
    let newUser = new UserModel({
      userName,
      email,
      password: hashedPass,
    });
    let createdUser = await newUser.save();
    res.status(201).json({ message: "Account Created!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `error in signup,try again ${error.message}` });
  }
});

module.exports = router;
