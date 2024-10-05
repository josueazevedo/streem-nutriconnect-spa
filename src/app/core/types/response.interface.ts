export interface Response<T = string> {
  error?: string;
  message: string;
  data: T;
  statusCode: number;
}

export interface Pagination<T> {
  total: number;
  pages: number;
  currentPage: number;
  items: T;
}
