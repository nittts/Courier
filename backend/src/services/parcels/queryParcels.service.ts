import { IParcelQuerySearch } from "../../interfaces/Parcels/parcel.types";
import prisma from "../../database/Prisma/database";
import { AppError } from "../../errors";

const queryParcelsService = async (queries: IParcelQuerySearch) => {
  try {
    const isQueryEmpty = Object.values(queries).every((key) => typeof key === "undefined");

    if (isQueryEmpty) {
      throw new AppError(400, "No Param nor Query was provided.", "Bad Request");
    }

    const res = await prisma.parcels.findMany({
      where: {
        OR: [{ shipment_id: queries.shipment_id }, { name: queries.name }, { client_id: queries.client_id }],
      },
    });

    return { count: res.length, results: res };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.statusCode, err.message, err.status);
    }
  }
};

export default queryParcelsService;
