import prisma from "../../database/database";
import { AppError } from "../../errors";

const getSingleShipmentService = async (id: string) => {
  try {
    const res = await prisma.shipments.findFirst({ where: { id } });

    if (!res) {
      throw new AppError(404, "Shipment not Found.", "Not Found");
    }

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default getSingleShipmentService;
