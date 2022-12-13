import {
  IProductCreate,
  IProductCreateTuple,
  IProductUpdateProps,
  IProductUpdateTuple,
} from "../../interfaces/products/product.type";
import { SchemaOf, ValidationError } from "yup";
import { NextFunction, Request, Response } from "express";

const productCreateValidator =
  (schema: SchemaOf<IProductCreateTuple>) => async (req: Request, res: Response, next: NextFunction) => {
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

const productUpdateBulkValidator =
  (schema: SchemaOf<IProductUpdateTuple>) => async (req: Request, res: Response, next: NextFunction) => {
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

const productUpdateValidator =
  (schema: SchemaOf<IProductUpdateProps>) => async (req: Request, res: Response, next: NextFunction) => {
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

export { productCreateValidator, productUpdateValidator, productUpdateBulkValidator };
