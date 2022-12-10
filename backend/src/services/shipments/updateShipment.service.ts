import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";
import { IShipmentUpdate } from "../../interfaces/Shipments/shipment.types";

const updateShipmentService = async (data: IShipmentUpdate) => {
  const { id } = data;

  try {
    if (typeof id === "undefined") {
      throw new AppError(400, "Shipment id field Missing.", "Bad Request");
    }

    const shipmentExists = await prisma.shipments.findFirst({ where: { id } });

    if (!shipmentExists) {
      throw new AppError(404, "Shipment not Found.", "Not Found");
    }
    const res = await prisma.shipments.update({
      where: { id },
      data,
    });

    return res;
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default updateShipmentService;
