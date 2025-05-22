type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface KhaosError {
  message: string;
};

export interface KhaosResponse<KhaosModel> {
  data?: KhaosModel;
  error?: KhaosError;
};

export interface IKhaosBuilder {
  endpoint: string;
  options: RequestInit;

  withAuthToken(): this;
  withBody(body: BodyInit): this;
};