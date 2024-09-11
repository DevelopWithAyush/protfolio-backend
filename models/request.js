import { Schema, Types, model } from "mongoose";

const requestSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      unique:true
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Request = model.Request || model("Request", requestSchema);
