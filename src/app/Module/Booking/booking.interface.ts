import mongoose from "mongoose";


export enum CVehicleType {
    Car = 'car',
    Truck = 'truck',
    SUV = 'suv',
    Van = 'van',
    Motorcycle = 'motorcycle',
    Bus = 'bus',
    ElectricVehicle = 'electricVehicle',
    HybridVehicle = 'hybridVehicle',
    Bicycle = 'bicycle',
    Tractor = 'tractor'
  }
  
  export interface CBooking {
    customerId: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId;
    slotId: mongoose.Types.ObjectId;
    vehicleType: CVehicleType;
    vehicleBrand: string;
    vehicleModel: string;
    manufacturingYear: number;
    registrationPlate: string;
  }