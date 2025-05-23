import type { IHttpBuilder } from "./HttpBuilder";
import type { HttpResponse } from "./HttpResponse";

export interface IHttpService {
  invoke<Data>(): Promise<HttpResponse<Data>>;
};

export class HttpService implements IHttpService {
  constructor(private builder: IHttpBuilder) { };

  public async invoke<Data>(): Promise<HttpResponse<Data>> {
    const response = await fetch(this.builder.endpoint, this.builder.options);
    const payload = await response.json();

    if (response.ok) return { data: payload as Data };
    return { error: { message: payload.message } };
  };
};