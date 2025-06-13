import * as yup from "yup";

export const ListMyCirclesSchema = yup.object({
  user: yup.number().positive().required(),
});