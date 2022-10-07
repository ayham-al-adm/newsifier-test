const { returnJsonFormattedResponse } = require("../helpers/response.helpers");
const baseUrl = process.env.BASE_URL;
module.exports.search = (req, res, next) => {
  return returnJsonFormattedResponse(
    res,
    [
      {
        thumbnail: `${baseUrl}/assets/img/image-1-thumb.gif`,
        url: `${baseUrl}/assets/img/image-1.gif`,
      },
    ],
    200
  );
};
