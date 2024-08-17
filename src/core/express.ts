import express from "express";
import { logging } from "./loggings";
import { getSequelize } from "./db";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const sequelize = getSequelize();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    logging.info("Database connected");
  } catch (error) {
    logging.error("Database connection error", error as { message: string });
  }
  logging.info(`Server started on port ${PORT}`);
});

export { app, sequelize };
