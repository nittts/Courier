import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICityCreate, ICityUpdate } from "../../interfaces/cities/city.types";

const cityCreateSchema: SchemaOf<ICityCreate> = yup.object().shape({
  name: yup.string().required("City name is required."),
  postcode: yup
    .string()
    .required("City postcode is required.")
    .max(12, "Invalid Postcode length (Too long).")
    .min(6, "Invalid Postcode length (Too short)."),
});

const cityUpdateSchema: SchemaOf<ICityUpdate> = yup.object().shape({
  name: yup.string(),
  postcode: yup.string().max(12, "Invalid Postcode length (Too long).").min(6, "Invalid Postcode length (Too short)."),
});

export { cityCreateSchema, cityUpdateSchema };
