import { Request, Response } from 'express';
import { Service } from '../Service/service.model';
import { SlotService, calculateTimeSlots } from './slost.service';


export const createSlotsHandler = async (req: Request, res: Response) => {
    const { service, date, startTime, endTime } = req.body;
  
    try {
      const serviceData = await Service.findById(service);
      if (!serviceData) {
        return res.status(404).json({ success: false, message: 'Service not found' });
      }
  
      const duration = serviceData.duration;
      const slots = calculateTimeSlots(startTime, endTime, duration).map(slot => ({ ...slot, service, date, isBooked: 'available' }));
  
      const createdSlots = await SlotService.createSlot(slots);
      res.status(201).json({
        success: true,
        statusCode: 200,
        message: 'Slots created successfully',
        data: createdSlots
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };

  export const SlotControllars = {
    createSlotsHandler
  };