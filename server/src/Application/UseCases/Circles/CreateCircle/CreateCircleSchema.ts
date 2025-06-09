import * as yup from "yup";

export const CreateCircleSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  onwer: yup.number().positive().required(),
});