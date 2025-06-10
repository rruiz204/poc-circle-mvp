import * as yup from "yup";
import { ListCirclesSchema } from "./ListCirclesSchema";
export type ListCirclesQuery = yup.InferType<typeof ListCirclesSchema>;