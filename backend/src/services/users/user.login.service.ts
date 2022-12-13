import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import { AppError } from "../../errors";
import prisma from "../../database/database";
import { IUserLogin } from "../../interfaces/users/user.types";

const userLoginService = async ({ email, password }: IUserLogin) => {
  try {
    const user = await prisma.users.findFirst({ where: { email } }).catch((err) => {
      throw new Prisma.PrismaClientKnownRequestError(err.message, {
        code: err.code,
        clientVersion: "4.7.1",
        meta: err.meta,
      });
    });

    if (!user) {
      throw new AppError(404, "Invalid Email / Password.", "Not found");
    }

    const passwordMatches = bcrypt.compareSync(password, user.password);
    if (!passwordMatches) {
      throw new AppError(401, "Invalid Email / Password.", "Unauthorized");
    }

    const token = jwt.sign({ user }, String(process.env.SECRET_KEY), { expiresIn: "24h" });

    return { message: "Logged in with success.", token };
  } catch (err) {
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

export default userLoginService;
