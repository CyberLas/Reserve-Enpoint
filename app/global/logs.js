// LOGS
import Log from "debug-level";

const log = new Log("reserve-enpoint");

globalThis.logErro = (txt) => log.error(txt);

globalThis.logWarn = (txt) => log.warn(txt);

globalThis.logInfo = (txt) => log.info(txt);

globalThis.logNote = (txt) => log.log(txt);
