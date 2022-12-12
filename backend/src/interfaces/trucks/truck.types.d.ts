export interface ITruck {
  id: number;
  license_plate: string;
  brand: string;
  max_weight: number;
  available: boolean;
  driver_id: string;
  branch_id: string;
}

export interface ITruckCreate {
  license_plate: string;
  brand: string;
  max_weight: number;
  available: boolean;
  driver_id?: string;
  branch_id: number;
}

export interface ITruckQueries {
  license_plate?: string;
  brand?: string;
  max_weight?: number;
  available?: boolean;
}

export interface ITruckUpdate {
  license_plate?: string;
  brand?: string;
  max_weight?: number;
  available?: boolean;
  driver_id?: string;
  branch_id?: string;
}
