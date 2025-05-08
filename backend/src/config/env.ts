export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  dbUrl: process.env.DATABASE_URL ?? "",
};
