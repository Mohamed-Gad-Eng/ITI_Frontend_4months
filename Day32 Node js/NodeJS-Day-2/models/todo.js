const mongoose = require("mongoose");
const { Schema } = mongoose;

let todoSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["todo", "in progress", "completed"],
    default: "todo",
  },
  
});
// todos
module.exports=mongoose.model('Todo',todoSchema)
