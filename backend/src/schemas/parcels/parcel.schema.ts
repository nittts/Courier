import * as yup from "yup";
import { SchemaOf } from "yup";
import { IParcelCreate, IParcelUpdateProps, IParcelUpdateTuple } from "../../interfaces/parcels/parcel.type";

const parcelCreateSchema: SchemaOf<IParcelCreate> = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  volume_weight: yup.number().required().min(0, "Invalid Parcel Weight."),
  client_id: yup.string().required(),
  shipment_id: yup.string(),
});

const parcelUpdateSchema: SchemaOf<IParcelUpdateProps> = yup.object().shape({
  name: yup.string(),
  content: yup.string(),
  volume_weight: yup.number().min(0, "Invalid Parcel Weight."),
  client_id: yup.string(),
  shipment_id: yup.string(),
});

const parcelUpdateBulkSchema: SchemaOf<IParcelUpdateTuple> = yup.object().shape({
  data: yup
    .array()
    .min(1, "At least one parcel is required.")
    .of(
      yup.object().shape({
        id: yup.string().required("Parcel ID is required"),
        data: yup.object().shape({
          name: yup.string(),
          content: yup.string(),
          volume_weight: yup.number().min(0, "Invalid Parcel Weight."),
          client_id: yup.string(),
          shipment_id: yup.string(),
        }),
      })
    ),
});

export { parcelCreateSchema, parcelUpdateSchema, parcelUpdateBulkSchema };
