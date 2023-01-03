import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";

const main = async () => {
  config();

  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.json({ type: "application/vnd.api+json" }));

  // ==> Morgan
  app.use(morgan("dev"));
  app.use(cors());

  await MongoClient.connect();

  app.get("/api/v1", (req, res) => {
    res.status(200).send({
      success: true,
      message: "Welcome to API!",
      version: "1.0.0",
    });
  });

  app.use("/api/v1", authRoutes);
  app.use("/api/v1", userRoutes);
  app.use("/api/v1", categoryRoutes);

  const port = process.env.PORT || 8089;

  app.listen(port, () => console.log(`==> Listening on port ${port}!`));
};

main();
