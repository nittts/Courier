import prisma from "../../database/database";
import { AppError } from "../../errors";
import { IUser } from "../../interfaces/users/user.types";
import { Prisma } from "@prisma/client";
import { v4 as uuid } from "uuid";

const userCreateService = async (data: IUser) => {
  try {
    const userExists = await prisma.users.findFirst({ where: { email: data.email } });

    if (userExists) {
      throw new AppError(401, "User already Exists.", "Unauthorized");
    }

    const res = await prisma.users
      .create({
        data: { ...data, id: `USR-${uuid()}` },
        include: {
          userTypes: true,
        },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    const { password, ...returnUser } = res;

    return { message: "User created with success.", results: returnUser };
  } catch (err) {
    console.log(err);

    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Prisma.PrismaClientKnownRequestError(err.message, {
        code: err.code,
        clientVersion: "4.7.1",
        meta: err.meta,
      });
    }
  }
};

export default userCreateService;
