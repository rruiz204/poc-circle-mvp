import type { HttpMethod, IKhaosBuilder } from "./KhaosTypes";

export class KhaosBuilder implements IKhaosBuilder {
  public endpoint: string = import.meta.env.VITE_BASE_URL;

  public options: RequestInit = {
    headers: { "Content-Type": "application/json" },
  };

  constructor(path: string, method: HttpMethod) {
    this.endpoint = `${this.endpoint}${path}`;
    this.options.method = method;
  };

  public withBody(body: any): this {
    this.options.body = JSON.stringify(body);
    return this;
  };

  public withAuthToken(): this {
    const headers = this.options.headers;
    const token = `Bearer ${localStorage.getItem("token")}`;
    this.options.headers = { ...headers, Authorization: token };
    return this;
  };
};