import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  date: Date;
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  username: {
    type: String,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export = mongoose.model<IUser>("User", userSchema);
