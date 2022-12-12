export interface ICity {
  id: number;
  name: string;
  postcode: string;
}

export interface ICityCreate {
  name: string;
  postcode: string;
}

export interface ICityQueries {
  name?: string;
  postcode?: string;
}

export interface ICityUpdate {
  name?: string;
  postcode?: string;
}
