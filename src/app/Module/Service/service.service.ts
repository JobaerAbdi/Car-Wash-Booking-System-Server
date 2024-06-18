import { CService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (ServiceData: CService) => {
  const result = await Service.create(ServiceData);
  return result;
};

//get by Id Service
const getServiceById = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};

//get all service
const getAllService = async() =>{
  const result = await Service.find();
  return result
};


export const ServiceServices = {
  createService,
  getServiceById,
  getAllService
};
