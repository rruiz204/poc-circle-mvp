import * as yup from "yup";
import { AuthRegisterSchema } from "./AuthRegisterSchema";
export type AuthRegisterCommand = yup.InferType<typeof AuthRegisterSchema>;
