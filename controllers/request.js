import { TryCatch } from "../middleware/error.js";
import { Request } from "../models/request.js";
import { ErrorHandler } from "../utils/utility.js";

export const requestHandler = TryCatch(async (req, res, next) => {
  const { date, time, work } = req.body;
  if (!date || !time || !work) {
    return next(new ErrorHandler("all field are required", 400));
  }
  const newRequest = new Request({
    user: req.user,
    date,
    time,
    work,
    condition: "pending",
  });

  await newRequest.save();
  res
    .status(201)
    .json({ success: true, message: "we will reach you within 2 days" });
});

export const myRequestHandler = TryCatch(async (req, res, next) => {
  const existingRequest =await Request.findOne({ user: req.user });
  console.log(existingRequest)
  if (!existingRequest) {
    res.status(200).json({ success: false, message: "not existing meeting" });
  } else {
    res
      .status(200)
      .json({ success: true, message: "you already schedule a meeting" });
  }
});
