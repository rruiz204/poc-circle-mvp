import * as yup from "yup";

export const ListCirclesSchema = yup.object({
  user: yup.number().positive().required(),
});