export interface IProduct {
  id: number;
  name: string;
  weight: number;
  parcel_id?: string;
}

export interface IProductCreate {
  name: string;
  weight: number;
  parcel_id?: string;
  client_id: string;
}

export interface IProductCreateTuple {
  data: IProductCreate[];
}

export interface IProductQueries {
  name?: string;
  weight?: number;
  parcel?: string;
  client?: string;
}

export interface IProductUpdateProps {
  name?: string;
  weight?: number;
  parcel_id?: string;
}

export interface IProductUpdateBulk {
  id: number;
  data: IProductUpdateProps;
}

export interface IProductUpdateTuple {
  data: IProductUpdateBulk[];
}

export interface IProductDelete {
  id: number;
}

export interface IProductDeleteTuple {
  data: IProductDelete[];
}
