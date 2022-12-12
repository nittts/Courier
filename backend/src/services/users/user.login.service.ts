import prisma from "../../database/database";
import { AppError } from "../../errors";
import { IUserLogin } from "../../interfaces/users/user.types";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IUserLogin) => {
  try {
    const user = await prisma.users.findFirst({ where: { email } });
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
  }
};

export default userLoginService;
