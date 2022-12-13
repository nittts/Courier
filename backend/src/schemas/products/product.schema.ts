import * as yup from "yup";
import { SchemaOf } from "yup";
import { IProductCreateTuple, IProductUpdateProps, IProductUpdateTuple } from "../../interfaces/products/product.type";

const productCreateSchema: SchemaOf<IProductCreateTuple> = yup.object().shape({
  data: yup
    .array()
    .min(1, "At least one product is required.")
    .of(
      yup.object().shape({
        name: yup.string().required("Product name is required."),
        weight: yup.number().required("Product weight is required.").min(0, "Invalid Product Weight."),
        parcel_id: yup.string(),
        client_id: yup.string().required("Product client ID is required."),
      })
    ),
});

const productUpdateSchema: SchemaOf<IProductUpdateProps> = yup.object().shape({
  name: yup.string(),
  weight: yup.number().min(0, "Invalid Product Weight."),
  parcel_id: yup.string(),
});

const productUpdateBulkSchema: SchemaOf<IProductUpdateTuple> = yup.object().shape({
  data: yup
    .array()
    .min(1, "At least one product is required.")
    .of(
      yup.object().shape({
        id: yup.number().required("Product ID is required"),
        data: yup.object().shape({
          name: yup.string(),
          weight: yup.number().min(0, "Invalid Product Weight."),
          parcel_id: yup.string(),
        }),
      })
    ),
});

export { productCreateSchema, productUpdateSchema, productUpdateBulkSchema };
