import { Logger } from 'logvis';

const logger: Logger = new Logger('VUE3');

process.env.NODE_ENV !== 'production' ? logger.enableAll() : logger.disableAll();

export default logger;
