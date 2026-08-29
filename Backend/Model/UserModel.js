import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
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

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  resetCode: {
    type: String,
  },

  resetCodeExpires: {
    type: Date,
  },
});

const User = mongoose.model('User', UserSchema)

export default User