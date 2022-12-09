export interface IParcel {
  id: string;
  name: string;
  content: string;
  volume_weight: number;
  admission_date: Date;
  client_id: string;
  shipment_id: string;
}

export interface IParcelCreate {
  name: string;
  content: string;
  volume_weight: number;
  client_id: string;
  shipment_id: string;
}

export interface IParcelQuerySearch {
  client_id?: string;
  shipment_id?: string;
  name?: string;
}

export interface IParcelUpdate {
  id: string;
  name?: string;
  content?: string;
  volume_weight?: number;
  client_id?: string;
  shipment_id?: string;
}

export interface IParcelWeight {
  max: number;
  min: number;
}
