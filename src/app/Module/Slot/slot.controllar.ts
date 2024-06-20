import { SlotService } from "./slost.service";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";

const createSlotsDB = catchAsync(async (req, res) => {
  const { service, date, startTime, endTime } = req.body;
  const result = await SlotService.createSlot(
    service,
    date,
    startTime,
    endTime
  );
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Slots created successfully",
    data: result,
  });
});

export const SlotControllars = {
  createSlotsDB,
};
