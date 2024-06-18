import catchAsync from "../../utils/catchAsync";
import { ServiceServices } from "./service.service";

const createServiceDb = catchAsync(async (req, res) => {
  const movieData = req.body;
  const result = await ServiceServices.createService(movieData);
  res.json({
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

export const ServiceControllars = {
  createServiceDb,
};
