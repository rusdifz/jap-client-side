export interface IPagination {
  page: number;
  total: number;
  total_page: number;
}

export interface ResponseAPI<T> {
  message?: string;
  meta?: { code?: number; msg?: string };
  data: T;
  pagination: IPagination;
  error?: string;
  error_data?: any;
}
