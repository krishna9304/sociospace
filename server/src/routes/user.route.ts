import Router, { Application } from "express";
import { UserController } from "../controllers/user.controller";

const userRouter: Application = Router();

userRouter.get("/", UserController.getUsers);

export default userRouter;
