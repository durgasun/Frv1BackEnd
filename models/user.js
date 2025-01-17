const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String},
    profile: { type: String},
    email: { type: String},
    mobileno: { type: Number, required: true },
    bio: { type: String},
    otp: { type: String},
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
