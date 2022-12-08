export interface IBranch {
  name: string;
  address: string;
  city_id: number;
  branch_lat: string;
  branch_long: string;
}

export interface IBranchQuery {
  name?: string;
  city_id?: number;
}

export interface IBranchUpdate {
  id: number;
  name?: string;
  address?: string;
  branch_lat?: string;
  branch_long?: string;
}
