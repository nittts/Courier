import * as yup from "yup";
import { SchemaOf } from "yup";
import { IShipmentCreate, IShipmentUpdate } from "../../interfaces/shipments/shipment.types";

const shipmentCreateSchema: SchemaOf<IShipmentCreate> = yup.object().shape({
  status: yup.string().required("Shipment Status is required."),
  arrival_time: yup.date(),
  departure_time: yup.date(),
  weight: yup.number().required("Shipment weight is required."),
  truck_id: yup.number(),
  driver_id: yup.string(),
  destination_branch: yup.number().required("Destination branch ID is required."),
  departure_branch: yup.number().required("Departure branch ID is required."),
});

const shipmentUpdateSchema: SchemaOf<IShipmentUpdate> = yup.object().shape({
  status: yup.string(),
  shipment_number: yup.string(),
  arrival_time: yup.date(),
  departure_time: yup.date(),
  weight: yup.number(),
  truck_id: yup.number(),
  driver_id: yup.string(),
  destination_branch: yup.number(),
  departure_branch: yup.number(),
});

export { shipmentCreateSchema, shipmentUpdateSchema };
