import { NextFunction, Request, Response } from "express";
import { IErrorHandler } from "../interfaces/error/errorHandler.interface";

const codeErrors = {
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  INTERNAL_ERROR: 500,
  ALREADY_EXISTS: 409,
  UNAUTHORIZED: 401,
};

export const errorHandler = async (
  err: IErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.error && err.code in codeErrors) {
    return res.status(codeErrors[err.code as keyof typeof codeErrors]).json(err);
  }
  return res
    .status(codeErrors["INTERNAL_ERROR"])
    .json({ error: { message: "Internal Error", code: "INTERNAL_ERROR" } });
};
