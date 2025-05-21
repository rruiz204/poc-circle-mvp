import type { IKhaosBuilder } from "./KhaosBuilder";

export interface KhaosError {
  message: string;
};

export interface KhaosResponse<KhaosModel> {
  data?: KhaosModel;
  error?: KhaosError;
};

export class KhaosService {
  public static async invoke<Model>(builder: IKhaosBuilder): Promise<KhaosResponse<Model>> {
    const response = await fetch(builder.endpoint, builder.options);
    const paylaod = await response.json() as KhaosResponse<Model>;

    if (response.ok) return { data: paylaod.data };
    return { error: paylaod.error };
  };
};