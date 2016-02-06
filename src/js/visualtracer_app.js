import logger from 'loglevel';
import WSClient from './ws_client';
import Config from './config';

export default class VisualtracerApp {
  constructor() {
    this.config = new Config();
    this.ws_client = new WSClient(this.config);
  }

  start() {
    logger.debug('[App#start] Starting application');
    this.ws_client.connect();
  }

  configure(configurator) {
    configurator(this.config);
  }
}
