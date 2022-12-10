import { IUserTypeSearch } from "../../interfaces/Users/user.types";
import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const queryUserByTypeService = async (data: IUserTypeSearch) => {
  try {
    let userType = {} as IUserTypeSearch;

    if (typeof data.type_name !== "undefined") {
      userType = (await prisma.userTypes.findFirst({ where: { type: data.type_name } })) as IUserTypeSearch;
    }

    const res = await prisma.users.findMany({
      where: { OR: [{ userType_id: data.id }, { userType_id: userType.id }] },
    });

    if (!res) {
      throw new AppError(404, "User not Found.", "Not Found");
    }

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default queryUserByTypeService;
