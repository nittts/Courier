import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITruckCreate, ITruckUpdate } from "../../interfaces/trucks/truck.types";

const truckCreateSchema: SchemaOf<ITruckCreate> = yup.object().shape({
  license_plate: yup.string().required("Truck license Plate is required."),
  brand: yup.string().required("Truck Brand is required."),
  max_weight: yup.number().required("Truck max Weight is required.").min(0, "Invalid Truck weight."),
  available: yup.boolean().required("Truck availability is required."),
  driver_id: yup.string(),
  branch_id: yup.number().required("Truck branch ID is required."),
});

const truckUpdateSchema: SchemaOf<ITruckUpdate> = yup.object().shape({
  license_plate: yup.string(),
  brand: yup.string(),
  max_weight: yup.number().min(0, "Invalid Truck weight."),
  available: yup.boolean(),
  driver_id: yup.string(),
  branch_id: yup.string(),
});

export { truckCreateSchema, truckUpdateSchema };
