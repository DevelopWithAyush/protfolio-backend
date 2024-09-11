import mongoose from "mongoose";
import jwt from "jsonwebtoken";
export const cookieOption = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};
const connectDB = (url) => {
  mongoose
    .connect(url, { dbName: "myWebsite" })
    .then((data) => {
      console.log(`connect to DB : ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendToken = (res, user, code, message) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    

    // Send response with cookie
    return res
        .status(code)
        .cookie("authToken", token, cookieOption) // Set the cookie in the response
        .json({
            success: true,
            message,
        });
};


export { connectDB, sendToken };
