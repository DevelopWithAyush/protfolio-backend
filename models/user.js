import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model.Request || model("User", userSchema);
