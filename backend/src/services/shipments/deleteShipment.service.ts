import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const deleteShipmentService = async (id: string) => {
  try {
    const findShipment = await prisma.shipments.findFirst({ where: { id } });

    if (findShipment === null) {
      throw new AppError(404, "Shipment not Found.", "Not Found");
    }

    const res = await prisma.shipments.delete({ where: { id } });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.name);
    }
  }
};

export default deleteShipmentService;
