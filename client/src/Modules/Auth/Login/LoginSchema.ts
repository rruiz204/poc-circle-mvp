import * as yup from "yup";
import { yupResolver } from "@primevue/forms/resolvers/yup";

const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(30).required(),
});

export const LoginResolver = yupResolver(LoginSchema);
export type LoginCommand = yup.InferType<typeof LoginSchema>;