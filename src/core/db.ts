import { Sequelize } from "sequelize";

let sequelize: Sequelize | null = null;

const POSTGRES_URI = process.env.POSTGRES_URI;

if (!POSTGRES_URI) {
  throw new Error("POSTGRES_URI is not defined");
}

const isLoggingEnabled = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const getSequelize = () => {
  if (sequelize) {
    return sequelize;
  }
  sequelize = new Sequelize(POSTGRES_URI, {
    dialect: "postgres",
    logging: isLoggingEnabled,
  });
  return sequelize;
};
export { getSequelize };
