import { Request, Response } from "express";
import { SlotService } from "./slost.service";
import catchAsync from "../../utils/catchAsync";

export const createSlotsHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { service, date, startTime, endTime } = req.body;

    const createdSlots = await SlotService.createSlot(
      service,
      date,
      startTime,
      endTime
    );
    res.status(201).json({
      success: true,
      statusCode: 200,
      message: "Slots created successfully",
      data: createdSlots,
    });
  }
);

export const SlotControllars = {
  createSlotsHandler,
};
