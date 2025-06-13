import * as yup from "yup";
import { ListMyCirclesSchema } from "./ListMyCirclesSchema";
export type ListMyCirclesQuery = yup.InferType<typeof ListMyCirclesSchema>;