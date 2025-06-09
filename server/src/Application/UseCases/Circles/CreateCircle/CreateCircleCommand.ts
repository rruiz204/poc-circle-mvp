import * as yup from "yup";
import { CreateCircleSchema } from "./CreateCircleSchema";
export type CreateCircleCommand = yup.InferType<typeof CreateCircleSchema>;