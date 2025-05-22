import type { IKhaosBuilder } from "./KhaosBuilder";

export interface Response<Data> {
  data?: Data;
  error?: {
    message: string;
  };
};

export interface IKhaosService {
  invoke<Data>(): Promise<Response<Data>>;
};

export class KhaosService implements IKhaosService {
  constructor(private builder: IKhaosBuilder) {};

  public async invoke<Data>(): Promise<Response<Data>> {
    const response = await fetch(this.builder.endpoint, this.builder.options);
    const payload = await response.json();

    if (response.ok) return { data: payload as Data };
    return { error: { message: payload.message } };
  };
};