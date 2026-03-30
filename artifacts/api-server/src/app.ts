import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import * as pinoHttpModule from "pino-http";
import type { HttpLogger, Options } from "pino-http";
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";

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

app.get("/", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    service: "caraway-api",
    health: "/api/healthz",
  });
});

app.get("/healthz", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api", router);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    error: "not_found",
    message: "No handler for this path",
  });
});

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  logger.error({ err }, "unhandled route error");
  if (res.headersSent) {
    return;
  }
  res.status(500).json({ error: "internal_error" });
});

export default app;