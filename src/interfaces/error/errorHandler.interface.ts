export interface IErrorHandler {
  error: {
    message: [] | string;
    type?: string;
  };
  code: string;
}
