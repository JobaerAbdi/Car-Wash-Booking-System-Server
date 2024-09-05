import { initialePayment } from "./payment.utils";

const initiale = async (BookingInitaleData: any) => {
  console.log(BookingInitaleData);
  const transactionId = `TXN-${Date.now()}`;

  const OrderDate = {
    transactionId,
    customerName: BookingInitaleData?.userName,
    customerEmail: BookingInitaleData?.userEmail,
    totalPrice: BookingInitaleData?.totalePrice,
    customerPhone: BookingInitaleData?.phone,
    customerAddress: BookingInitaleData?.address,
  };

  const paymentSession = await initialePayment(OrderDate);
  console.log(paymentSession);
  return paymentSession;
};

export const PaymentServices = {
  initiale,
};
