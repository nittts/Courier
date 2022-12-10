import { IShipmentDriverSearch } from "../../interfaces/Shipments/shipment.types";
import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

interface IShipmentDriver {
  id: string;
}

const getShipmentByDriverService = async (data: IShipmentDriverSearch) => {
  try {
    let driver = {} as IShipmentDriver;

    if (typeof data.name !== "undefined") {
      driver = (await prisma.users.findFirst({ where: { name: data.name } })) as IShipmentDriver;
    }

    const res = await prisma.shipments.findFirst({
      where: { OR: [{ id: data.id }, { driver_id: driver.id }] },
    });

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

export default getShipmentByDriverService;
