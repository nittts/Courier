// import shipmentsRouter from "./shipments/shipments.routes";
// import branchesRouter from "./branches/branches.routes";
// import productsRouter from "./products/products.routes";
import parcelsRouter from "./parcels/parcels.routes";
import citiesRouter from "./cities/cities.routes";
// import truckRouter from "./trucks/trucks.routes";
// import userRouter from "./users/users.routes";

import { Request, Response, Router } from "express";

const AppRouter = Router();

// AppRouter.use("/shipments", shipmentsRouter);
// AppRouter.use("/products", productsRouter);
// AppRouter.use("/branches", branchesRouter);
AppRouter.use("/parcels", parcelsRouter);
AppRouter.use("/cities", citiesRouter);
// AppRouter.use("/trucks", truckRouter);
// AppRouter.use("/users", userRouter);

AppRouter.get("/", (req: Request, res: Response) => {
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

export default AppRouter;
