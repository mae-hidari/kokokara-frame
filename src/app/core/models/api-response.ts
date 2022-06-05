export type ApiResponse<T> = {
  data: T;
  error: any;
  status: number;
};
