import prisma from "../../database/database";
import { AppError } from "../../errors";
import { Prisma } from "@prisma/client";

const userGetAllService = async (page: number, perPage: number) => {
  try {
    const res = await prisma.users.findMany({
      skip: page * 1,
      take: perPage,
      orderBy: {
        name: "asc",
      },
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

    const count = await prisma.users.count();

    return {
      message: "Users Found.",
      prev: page === 0 ? null : `localhost:3000/api/v1/users/all?page=${page - 1}&perPage=${perPage}`,
      next: count <= perPage * page ? null : `localhost:3000/api/v1/users/all?page=${page + 1}&perPage=${perPage}`,
      count: count,
      results: res,
    };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw new AppError(500, "Unkown Server error. Please Contact Support.", "Internal Server Error");
    }
  }
};

export default userGetAllService;
