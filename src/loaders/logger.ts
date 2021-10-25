import bunyan from 'bunyan';

const log = bunyan.createLogger({ name: 'proxy-server' });
export default log;
