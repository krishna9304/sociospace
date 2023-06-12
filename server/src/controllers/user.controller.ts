import { NextFunction, Request, Response } from "express";
import { appwrite } from "../appwrite";

export const UserController = {
  getUsers: async (_: Request, res: Response, __: NextFunction) => {
    try {
      const users = await appwrite.users.list();
      return res.status(200).json({
        message: "Users fetched successfully",
        data: users,
        errors: [],
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Users fetch failed",
        data: null,
        errors: [error],
      });
    }
  },
  verifyToken: async (req: Request, res: Response, next: NextFunction) => {},
};
