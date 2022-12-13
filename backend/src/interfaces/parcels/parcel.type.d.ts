export interface IParcel {
  id: string;
  name: string;
  content: string;
  volume_weight: number;
  admission_date: date;
  client_id: string;
  shipment_id: string;
}

export interface IParcelCreate {
  name: string;
  content: string;
  volume_weight: number;
  client_id: string;
  shipment_id?: string;
}

export interface IParcelCreateTuple {
  data: IParcelCreate[];
}

export interface IParcelQueries {
  name?: string;
  content?: string;
  client_id?: string;
}

export interface IParcelUpdateProps {
  name?: string;
  content?: string;
  volume_weight?: number;
  client_id?: string;
  shipment_id?: string;
}

export interface IParcelUpdateBulk {
  id: string;
  data: IParcelUpdateProps;
}

export interface IParcelUpdateTuple {
  data: IParcelUpdateBulk[];
}

export interface IParcelDelete {
  id: string;
}

export interface IParcelDeleteTuple {
  data: IParcelDelete[];
}
