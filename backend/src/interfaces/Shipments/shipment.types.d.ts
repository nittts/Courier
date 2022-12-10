export interface IShipmentDriverSearch {
  id: string;
  name?: string;
}

export interface IShipmentCreate {
  id: string;
  status: string;
  arrival_time?: Date | null;
  departure_time: Date;
  weight: number;
  truck_id: number;
  driver_id: string;
  destination_branch: number;
  departure_branch: number;
  parcel_id?: string | null;
}

export interface IShipmentUpdate {
  id: string;
  status?: string;
  arrival_time?: Date;
  departure_time?: Date;
  weight?: number;
  truck_id?: number;
  driver_id?: string;
  destination_branch?: number;
  departure_branch?: number;
  parcel_id?: string;
}
