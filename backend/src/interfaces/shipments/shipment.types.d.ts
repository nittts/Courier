export interface IShipment {
  id: string;
  shipment_number: string;
  status: string;
  arrival_time: date;
  departure_time: date;
  weight: number;
  truck_id: number;
  driver_id: string;
  destination_branch: number;
  departure_branch: number;
}

export interface IShipmentCreate {
  status: string;
  arrival_time?: date;
  departure_time: date;
  weight: number;
  truck_id?: number;
  driver_id?: string;
  destination_branch: number;
  departure_branch: number;
}

export interface IShipmentQueries {
  shipment_number?: string;
  status?: string;
  weight?: number;
  truck_id?: number;
  driver_id?: string;
  destination_branch?: number;
  departure_branch?: number;
}

export interface IShipmentUpdate {
  status?: string;
  arrival_time?: date;
  departure_time?: date;
  weight?: number;
  truck_id?: number;
  driver_id?: string;
  destination_branch?: number;
  departure_branch?: number;
}
