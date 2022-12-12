import * as yup from "yup";
import { SchemaOf } from "yup";
import { IBranchCreate, IBranchUpdate } from "../../interfaces/branches/branch.types";

const branchCreateSchema: SchemaOf<IBranchCreate> = yup.object().shape({
  name: yup.string().required("Branch name is required."),
  address: yup.string().required("Branch adress is required."),
  city_id: yup.number().required("City ID is required."),
  branch_lat: yup.string().required("Branch latitude is required."),
  branch_long: yup.string().required("Branch longitude is required."),
});

const branchUpdateSchema: SchemaOf<IBranchUpdate> = yup.object().shape({
  name: yup.string(),
  address: yup.string(),
  city_id: yup.number().min(1, "Invalid City ID."),
  branch_lat: yup.string(),
  branch_long: yup.string(),
});

export { branchCreateSchema, branchUpdateSchema };
