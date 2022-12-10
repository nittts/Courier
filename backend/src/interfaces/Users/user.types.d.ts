export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  userType_id: number;
  branch_id: number;
}

export interface IUserTypeSearch {
  id: number;
  type_name?: string;
}

export interface IUserUpdate {
  requester_type: number;
  id: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  userType_id?: number;
  branch_id?: number;
}

export interface IUserLoggedUpdate {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  userType_id?: number;
  branch_id?: number;
}
