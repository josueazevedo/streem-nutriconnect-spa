export interface Response<T = string> {
  error?: string;
  message: string;
  data: T;
  statusCode: number;
}
