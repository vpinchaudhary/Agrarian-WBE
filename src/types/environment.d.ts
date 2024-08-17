declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "development" | "production";
      POSTGRES_URI?: string;
      LOGTAIL_SORUCE_TOKEN?: string;
    }
  }
}

export {};
