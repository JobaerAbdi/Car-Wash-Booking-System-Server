import { CService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (ServiceData: CService) => {
  const result = await Service.create(ServiceData);
  return result;
};

export const ServiceServices = {
  createService,
};
