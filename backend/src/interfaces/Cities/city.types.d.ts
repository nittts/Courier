export interface ICity {
  name: string;
  postcode: string;
}

export interface ICityQuerySearch {
  name?: string;
  postcode?: string;
}

export interface ICityUpdate {
  id: number;
  name?: string;
  postcode?: string;
}
