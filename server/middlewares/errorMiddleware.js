const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Backend Error";
  res.status(status).json({ message, extraDetails });
//   console.log("errorMiddleware: ", err, "status: ", status, "message: ", message, "extraDetails: ", extraDetails, "req: ", req, "res: ", res, "next: ", next, "err: ", err, "errorMiddleware: ", errorMiddleware);
console.log(extraDetails)
};

module.exports = errorMiddleware;
