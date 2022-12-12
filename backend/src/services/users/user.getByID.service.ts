import prisma from "../../database/database";
import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";

const userGetByIDService = async (id: string) => {
  try {
    const res = await prisma.users.findFirst({
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
    });

    if (!res) {
      throw new AppError(401, "User not found.", "Not Found");
    }

    return { message: "User Found.", results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw new AppError(500, "Unkown Server error. Please Contact Support.", "Internal Server Error");
    }
  }
};

export default userGetByIDService;
