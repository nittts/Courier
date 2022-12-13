import * as yup from "yup";
import { SchemaOf } from "yup";
import * as bycript from "bcrypt";
import { IUserCreate, IUserLogin, IUserUpdate } from "../../interfaces/users/user.types";

const userCreationSchema: SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required("User name is required."),
  email: yup.string().required("User email is required.").email("Invalid user email."),
  password: yup
    .string()
    .required("User Password is required.")
    .transform((value, originalValue) => {
      return bycript.hashSync(originalValue, 10);
    }),
  phone: yup.string().required("User phone is required."),
  user_type_id: yup
    .number()
    .required("User type ID is required.")
    .min(1, "Invalid User Type ID.")
    .max(5, "Invalid User Type ID"),
  branch_id: yup.number().required("User branch ID is required.").min(1, "Invalid User Branch ID."),
  createdOn: yup.date().default(() => {
    return new Date();
  }),
});

const userLoginSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required("User email is required.").email("Invalid user email."),
  password: yup.string().required("User Password is required."),
});

const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Invalid user email."),
  password: yup.string(),
  phone: yup.string(),
  user_type_id: yup.number(),
  branch_id: yup.number(),
});

export { userCreationSchema, userLoginSchema, userUpdateSchema };
