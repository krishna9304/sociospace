import express, { Application, NextFunction, Request, Response } from "express";
import colors from "ansi-colors";
import { Server } from "http";
import mainRouter from "./routes";
import bodyParser from "body-parser";
import timeout from "connect-timeout";
import cors from "cors";
import morgan from "morgan";
import { ISDEV, PORT } from "./contants";

// Main Application
const app: Application = express();

// Middlewares
app.use(cors());
app.use(timeout("120s"));
app.use(express.json());
app.use(haltOnTimedout);
app.use(morgan("dev"));

function haltOnTimedout(req: Request, res: Response, next: NextFunction) {
  if (!req.timedout) next();
}

app.get("/api/v1", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "Server running!",
    data: null,
    errors: [],
  });
});

// Main routes
app.use("/api/v1", mainRouter);

// 404 Route
const route404 = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Route not Found", data: {} });
};

app.use("*", timeout("1200s"), route404);

// Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.json({
    message: "Something went wrong",
    errs: Array.isArray(err)
      ? err
      : typeof err === "object" && err.message
      ? [err.message]
      : [err],
  });
});

export const server: Server = app.listen(PORT, () => {
  ISDEV && console.clear();
  console.log(
    ` Server running on PORT \n\t${
      ISDEV ? colors.cyan("http://localhost:") : colors.cyan(String(PORT))
    }\n at ${Date()}`
  );
});
