const mongoose = require("mongoose");

// create schema for our users
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// add relationship with message collection
UserSchema.virtual("messages", {
  ref: "Message",
  localField: "_id",
  foreignField: "owner"
});

// create a model for our users
const User = mongoose.model("User", UserSchema);

module.exports = User;
