import Router, { Application } from "express";
import userRouter from "./user.route";

const mainRouter: Application = Router();

mainRouter.use("/users", userRouter);

export default mainRouter;
