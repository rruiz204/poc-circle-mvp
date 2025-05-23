export interface HttpResponse<Data> {
  data?: Data;
  error?: {
    message: string;
  };
};