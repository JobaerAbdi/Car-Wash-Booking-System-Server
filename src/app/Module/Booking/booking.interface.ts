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
    customer: mongoose.Types.ObjectId;
    service: mongoose.Types.ObjectId;
    slot: mongoose.Types.ObjectId;
    vehicleType: CVehicleType;
    vehicleBrand: string;
    vehicleModel: string;
    status:string;
    manufacturingYear: number;
    registrationPlate: string;
  }