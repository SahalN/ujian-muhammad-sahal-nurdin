/** @format */

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};
module.exports = mongoose.model("Note", noteSchema);
