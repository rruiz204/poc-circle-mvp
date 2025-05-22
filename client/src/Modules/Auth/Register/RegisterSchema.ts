import * as yup from "yup";
import { yupResolver } from "@primevue/forms/resolvers/yup";

const RegisterSchema = yup.object({
  username: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
});

export const RegisterResolver = yupResolver(RegisterSchema);
export type RegisterCommand = yup.InferType<typeof RegisterSchema>;