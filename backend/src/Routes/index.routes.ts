import userRouter from "./Users/user.routes";
import cityRouter from "./Cities/city.routes";
import trucksRouter from "./Trucks/truck.routes";
import parcelRouter from "./parcels/parcel.routes";
import branchRouter from "./Branches/branch.routes";
import productsRouter from "./Products/product.routes";
import shipmentsRouter from "./Shipments/shipment.routes";

import { Request, Response, Router } from "express";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/cities", cityRouter);
indexRouter.use("/trucks", trucksRouter);
indexRouter.use("/parcels", parcelRouter);
indexRouter.use("/branches", branchRouter);
indexRouter.use("/products", productsRouter);
indexRouter.use("/shipments", shipmentsRouter);

indexRouter.get("/", (req: Request, res: Response) => {
  return res.send({
    Message: "API Running",
    Reference: {
      users: "{{base_url}}/api/v1/users",
      cities: "{{base_url}}/api/v1/cities",
      trucks: "{{base_url}}/api/v1/trucks",
      parcels: "{{base_url}}/api/v1/parcels",
      product: "{{base_url}}/api/v1/product",
      branches: "{{base_url}}/api/v1/branches",
      shipments: "{{base_url}}/api/v1/shipments",
    },
    CreatedBy: "Nittts S2",
    Github: "https://github.com/nittts",
  });
});

export default indexRouter;
