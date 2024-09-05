import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const initialePayment = async (OrderDate: any) => {
  const response = await axios.post(process.env.PAYMENT_URL!, {
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    tran_id: OrderDate.transactionId,
    success_url: `http://localhost:3000/api/v1/payment/confirmation?
transactionId=${OrderDate.transactionId}&status=success`,
    fail_url:  `http://localhost:3000/api/v1/payment/confirmation?&status=Faild`,
    cancel_url: "http://localhost:5173/",
    amount: OrderDate.totalPrice,
    currency: "BDT",
    desc: "Merchant Registration Payment",
    cus_name: OrderDate.customerName,
    cus_email: OrderDate.customerEmail,
    cus_add1: OrderDate.customerAddress,
    cus_add2: "Mohakhali DOHS",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1206",
    cus_country: "Bangladesh",
    cus_phone: OrderDate.customerPhone,
    type: "json",
  });
  return response.data;
};