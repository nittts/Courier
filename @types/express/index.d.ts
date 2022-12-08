import { IUser } from "../../src/interfaces/Users/user.types";
import * as express from "express";

declare global {
  namespace Express {
    export interface Request {
      user: IUser;
    }
  }
}
