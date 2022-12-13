import { SchemaOf, ValidationError } from "yup";
import { NextFunction, Request, Response } from "express";
import { IParcelCreate, IParcelUpdateProps, IParcelUpdateTuple } from "../../interfaces/parcels/parcel.type";

const parcelCreateValidator =
  (schema: SchemaOf<IParcelCreate>) => async (req: Request, res: Response, next: NextFunction) => {
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

const parcelUpdateBulkValidator =
  (schema: SchemaOf<IParcelUpdateTuple>) => async (req: Request, res: Response, next: NextFunction) => {
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

const parcelUpdateValidator =
  (schema: SchemaOf<IParcelUpdateProps>) => async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    try {
      const validatedData = await schema.validate(data, { abortEarly: false, stripUnknown: true });

      req.body = validatedData;

      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        const newObject = Object.assign({}, err.errors);

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

export { parcelCreateValidator, parcelUpdateValidator, parcelUpdateBulkValidator };
