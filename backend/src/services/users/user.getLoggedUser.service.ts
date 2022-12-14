import { AppError } from "../../errors";
import { Prisma } from "../../../prisma";
import prisma from "../../database/database";

const userGetLoggedUserService = async (id: string) => {
  try {
    const res = await prisma.users
      .findFirst({
        where: { id },
        include: {
          branches: {
            select: {
              name: true,
              address: true,
              city: {
                select: {
                  name: true,
                },
              },
            },
          },
          trucks: true,
          parcels: true,
          shipments: true,
          userTypes: {
            select: {
              type: true,
            },
          },
        },
      })
      .catch((err) => {
        throw new Prisma.PrismaClientKnownRequestError(err.message, {
          code: err.code,
          clientVersion: "4.7.1",
          meta: err.meta,
        });
      });

    return { message: "Logged User Found.", results: res };
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

export default userGetLoggedUserService;
