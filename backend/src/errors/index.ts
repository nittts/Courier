import { Prisma } from "@prisma/client";
import { Response } from "express";

export class AppError extends Error {
  statusCode;
  status;

  constructor(statusCode: number, message: string, status: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.status = status;
  }
}

export const handleError = (err: AppError, res: Response) => {
  const { statusCode, message, status } = err;

  return res.status(statusCode).json({
    statusCode,
    message,
    status,
  });
};

export const handlePrismaError = (err: Prisma.PrismaClientKnownRequestError, res: Response) => {
  const { message, code, meta } = err;

  return res.status(500).json({
    statusCode: 500,
    message,
    PrismaCode: code,
    cause: meta?.target,
  });
};
