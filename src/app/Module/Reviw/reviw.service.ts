import { CReviw } from "./reviw.interface";
import { Reviw } from "./reviw.model";

const createReviw = async (ReviwData: CReviw) => {
  const result = await Reviw.create(ReviwData);
  return result;
};

export const ReviwServices = {
  createReviw,
};
