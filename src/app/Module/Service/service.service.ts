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
  const result = await Service.find({ isDeleted: false }).exec();
  return result
};

//update service
 const updateService = async (id: string, updateData: Partial<CService>) => {
  const result = await Service.findByIdAndUpdate(id, updateData, {new:true, runValidators: true}).exec();
  return result;
};

//delete service
const deleteService = async (id: string): Promise<CService | null> => {
   const result = await Service.findByIdAndUpdate(id,{isDeleted:true}, {new:true}).exec();
  return result
};


export const ServiceServices = {
  createService,
  getServiceById,
  getAllService,
  updateService,
  deleteService
};
