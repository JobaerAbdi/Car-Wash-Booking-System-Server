import { TimeSlot } from "../Interface/Time";


export const calculateTimeSlots = (startTime: string, endTime: string, duration: number): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  let start = new Date(`1970-01-01T${startTime}:00Z`);
  const end = new Date(`1970-01-01T${endTime}:00Z`);
  
  while (start < end) {
    const slotEnd = new Date(start.getTime() + duration * 60000);
    if (slotEnd > end) break;

    slots.push({
      startTime: start.toISOString().substring(11, 16),
      endTime: slotEnd.toISOString().substring(11, 16)
    });

    start = slotEnd;
  }

  return slots;
};