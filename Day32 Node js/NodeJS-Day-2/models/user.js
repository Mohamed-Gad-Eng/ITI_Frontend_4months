const mongoose = require("mongoose");
const { Schema } = mongoose;

let userSchema = Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// users
module.exports = mongoose.model("User", userSchema);
