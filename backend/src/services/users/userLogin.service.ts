import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async (email: string, password: string) => {
  try {
    const user = await prisma.users.findFirst({ where: { email } });

    if (!user) {
      throw new AppError(404, "Invalid Email/Password.", "Not Found");
    }

    const passwordMatches = bcrypt.compareSync(password, user.password);

    if (!passwordMatches) {
      throw new AppError(403, "Invalid Email/Password.", "Unauthorized");
    }

    const token = jwt.sign({ user }, String(process.env.SECRET_KEY), { expiresIn: "24h" });

    return token;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default userLoginService;
