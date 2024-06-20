

interface TimeSlot {
  startTime: string;
  endTime: string;
}

export const calculateTimeSlots = (startTime: string, endTime: string, duration: number): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  let currentStartTime = new Date(`1970-01-01T${startTime}:00Z`).getTime();
  const finalEndTime = new Date(`1970-01-01T${endTime}:00Z`).getTime();

  while (currentStartTime < finalEndTime) {
    const currentEndTime = new Date(currentStartTime + duration * 60000).toISOString().substring(11, 16);
    slots.push({
      startTime: new Date(currentStartTime).toISOString().substring(11, 16),
      endTime: currentEndTime
    });
    currentStartTime += duration * 60000;
  }

  return slots;
};