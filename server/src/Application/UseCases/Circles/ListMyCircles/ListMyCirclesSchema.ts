import * as yup from "yup";

export const ListMyCirclesSchema = yup.object({
  userId: yup.number().positive().required(),
});