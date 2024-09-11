import { TryCatch } from "../middleware/error.js";
import { User } from "../models/user.js";
import { cookieOption, sendToken } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";

export const login = TryCatch(async (req, res, next) => {
  const { email, name, picture } = req.body;

  // Find the user by email
  let user = await User.findOne({ email });

  // If the user does not exist, create a new one
  if (!user) {
    user = new User({
      name,
      email,
      picture,
    });
    await user.save();
  }
  sendToken(res, user, 201, `welcome ${user.name}`);
});

export const myprofile = TryCatch(async (req, res, next) => {

  const user = await User.findById(req.user);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  res.status(200).json({
    success: true,
    user,
  });
});

export const logout = TryCatch(async (req, res, next) => {
  return res
    .status(200)
    .cookie("authToken", "", { ...cookieOption, maxAge: 0 })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});
