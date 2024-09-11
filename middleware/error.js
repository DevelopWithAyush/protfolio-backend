const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // if (err.code === 11000) {
  //   const error = object.key(err.keyPattern).join(",");
  //   err.message = `Duplicate field - ${error}`;
  //   err.statusCode = 400;
  // }

  // if (err.name === "CastError") {
  //   (err.message = `Invalid Format of ${err.path}`), (err.statusCode = 400);
  // }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
const TryCatch = (passedFunction) => async (req, res, next) => {
  try {
    await passedFunction(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { errorMiddleware, TryCatch };
