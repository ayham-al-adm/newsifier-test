module.exports.returnJsonFormattedResponse = (
  res,
  data = {},
  status = 200,
  message = "succeed!"
) => {
  res.status(status).json({
    success: true,
    message: message,
    data: data,
  });
};
