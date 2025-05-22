import type { KhaosResponse, IKhaosBuilder } from "./KhaosTypes";

export class KhaosService {
  public static async invoke<Model>(builder: IKhaosBuilder): Promise<KhaosResponse<Model>> {
    const response = await fetch(builder.endpoint, builder.options);
    const paylaod = await response.json();

    if (response.ok) return { data: paylaod as Model };
    return { error: { message: paylaod.message } };
  };
};