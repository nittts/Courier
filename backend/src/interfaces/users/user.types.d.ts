export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  user_type_id: number;
  branch_id: number;
  createdOn: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  phone: string;
  user_type_id: number;
  branch_id: number;
  createdOn?: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  user_type_id?: number;
  branch_id?: number;
}

export interface IUserQueries {
  name?: string;
  phone?: string;
  type_id?: number;
}
