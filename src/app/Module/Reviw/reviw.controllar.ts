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

const getReviwsDB = catchAsync(async (req, res) => {
  const result = await ReviwServices.getReviws();
  res.status(httpStatus.OK).json({
    success: true,
    message: "All Reviw Get Successfully !",
    data: result,
  });
});

export const ReviwControllars = {
  createReviwDB,
  getReviwsDB,
};
