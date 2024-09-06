import { CReviw } from "./reviw.interface";
import { Reviw } from "./reviw.model";

const createReviw = async (ReviwData: CReviw) => {
  const result = await Reviw.create(ReviwData);
  return result;
};

const getReviws = async () => {
  const result = await Reviw.find();
  return result;
};

export const ReviwServices = {
  createReviw,
  getReviws
};
