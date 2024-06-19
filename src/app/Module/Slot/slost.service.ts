import { CSlot } from "./slot.interface";
import { Slot } from "./slot.model";

const createSlot = async (slotData: CSlot[]): Promise<CSlot[]> => {
  const result = await Slot.create(slotData);
  return result;
};

export const calculateTimeSlots = (
  startTime: string,
  endTime: string,
  duration: number
): CSlot[] => {
  const slots: CSlot[] = [];
  let start = new Date(`1970-01-01T${startTime}:00Z`).getTime();
  const end = new Date(`1970-01-01T${endTime}:00Z`).getTime();

  while (start < end) {
    const slotEnd = new Date(start + duration * 60000)
      .toISOString()
      .substring(11, 16);
    slots.push({
      startTime: new Date(start).toISOString().substring(11, 16),
      endTime: slotEnd,
    } as CSlot);
    start += duration * 60000;
  }

  return slots;
};

export const SlotService = {
  createSlot,
};
