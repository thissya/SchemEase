import mongoose from "mongoose";
import { SCHEMA_CONST } from "../constants/schema.constants.js";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type:String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userDetail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: SCHEMA_CONST.USERDETAILS,
    },
    details: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model(SCHEMA_CONST.USER,userSchema);