export interface ITruckCreate {
  license_plate: string;
  brand: string;
  max_weight: number;
  available: boolean;
  driver_id?: string | null;
  branch_id: number;
}

export interface ITruckUpdate {
  id: number;
  license_plate?: string;
  max_weight?: number;
  available?: boolean;
  driver_id?: string;
  branch_id?: number;
}
