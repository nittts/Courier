import { Request, Response, Router } from "express";
import userRouter from "./Users/user.routes";
import cityRouter from "./Cities/city.routes";
import branchRouter from "./Branches/branch.routes";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/cities", cityRouter);
indexRouter.use("/branches", branchRouter);

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
