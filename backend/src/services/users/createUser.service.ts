import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";
import { IUser } from "../../interfaces/Users/user.types";

const createUserService = async (data: IUser) => {
  try {
    const missingValues = Object.entries(data).find((item) => typeof item[1] === "undefined");

    if (missingValues && missingValues?.length > 0) {
      throw new AppError(400, `${missingValues[0]} field is Required.`, "Bad Request");
    }

    const res = await prisma.users.create({ data });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      console.log(err);
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default createUserService;
