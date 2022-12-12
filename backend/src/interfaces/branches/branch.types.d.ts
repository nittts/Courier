export interface IBranch {
  id: number;
  name: string;
  address: string;
  city_id: number;
  branch_lat: string;
  branch_long: string;
}

export interface IBranchCreate {
  name: string;
  address: string;
  city_id: number;
  branch_lat: string;
  branch_long: string;
}

export interface IBranchQueries {
  name?: string;
  address?: string;
  coords?: {
    branch_lat: string;
    branch_long: string;
  };
}

export interface IBranchUpdate {
  name?: string;
  address?: string;
  city_id?: number;
  branch_lat?: string;
  branch_long?: string;
}
