import { Logtail } from "@logtail/node";
import { Context } from "@logtail/types";

const LOGTAIL_SORUCE_TOKEN = process.env.LOGTAIL_SORUCE_TOKEN;
const isLoggingEnabled = process.env.NODE_ENV === "production";

if (!LOGTAIL_SORUCE_TOKEN && isLoggingEnabled) {
  throw new Error("LOGTAILL_SORUCE_TOKEN is not set");
}

const logtail = (function () {
  if (!isLoggingEnabled || !LOGTAIL_SORUCE_TOKEN) {
    return console;
  }
  return new Logtail(LOGTAIL_SORUCE_TOKEN);
})();

const logging = {
  warn: <T extends Context>(message: string, metadata?: T) => {
    logtail.warn(message, metadata);
  },
  error: <T extends Context>(message: string, metadata?: T) => {
    logtail.error(message, metadata);
  },
  info: <T extends Context>(message: string, metadata?: T) => {
    logtail.info(message, metadata);
  },
};

export { logging };
