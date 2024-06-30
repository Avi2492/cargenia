import mongoose, { Schema } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
}

const userSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please Give a Username"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Provide email"],
      unique: true,
      match: [/.+\@.+\..+/, "please use valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
    verifyCode: {
      type: String,
      required: [true, "verifyCode is required!"],
    },
    verifyCodeExpiry: {
      type: Date,
      required: [true, "verifyCode Expiry is required!"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);

export default UserModel;
