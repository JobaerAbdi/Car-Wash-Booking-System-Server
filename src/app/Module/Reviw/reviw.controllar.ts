import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { ReviwServices } from "./reviw.service";

const createReviwDB = catchAsync(async (req, res) => {
  const ReviwData = req.body;
  const result = await ReviwServices.createReviw(ReviwData);
  res.status(httpStatus.OK).json({
    success: true,
    message: "Reviw Created successfully!",
    data: result,
  });
});

export const ReviwControllars = {
  createReviwDB,
};
