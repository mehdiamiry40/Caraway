import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import * as pinoHttpModule from "pino-http";
import type { HttpLogger, Options } from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();
type PinoHttpFactory = (opts?: Options<Request, Response>) => HttpLogger<Request, Response>;

// Support both CJS and ESM export shapes across different TypeScript/module settings.
const pinoHttp =
  (
    pinoHttpModule as unknown as {
      pinoHttp?: PinoHttpFactory;
      default?: PinoHttpFactory;
    }
  ).pinoHttp ??
  (
    pinoHttpModule as unknown as {
      default?: PinoHttpFactory;
    }
  ).default;

if (!pinoHttp) {
  throw new Error("pino-http export could not be resolved");
}

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: Request) {
        return { id: req.id, method: req.method, url: req.url?.split("?")[0] }; 
      },
      res(res: Response) {
        return { statusCode: res.statusCode };
      },
    },
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

export default app;