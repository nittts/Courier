import { SchemaOf, ValidationError } from "yup";
import { NextFunction, Request, Response } from "express";
import { ITruckCreate, ITruckUpdate } from "../../interfaces/trucks/truck.types";

const truckCreateValidator =
  (schema: SchemaOf<ITruckCreate>) => async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try {
      const validatedData = await schema.validate(data, { abortEarly: false, stripUnknown: true });

      req.body = validatedData;

      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(400).send({
          statusCode: 400,
          message: err.errors.join(" "),
          status: "Bad Request.",
        });
      } else {
        return res.status(500).send({
          statusCode: 500,
          message: "Unkown Server Error. Please contact Support",
          status: "Internal Server Error",
        });
      }
    }
  };

const truckUpdateValidator =
  (schema: SchemaOf<ITruckUpdate>) => async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try {
      const validatedData = await schema.validate(data, { abortEarly: false, stripUnknown: true });

      req.body = validatedData;

      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(400).send({
          statusCode: 400,
          message: err.errors.join(" "),
          status: "Bad Request.",
        });
      } else {
        return res.status(500).send({
          statusCode: 500,
          message: "Unkown Server Error. Please contact Support",
          status: "Internal Server Error",
        });
      }
    }
  };

export { truckCreateValidator, truckUpdateValidator };
