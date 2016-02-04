import logger from 'loglevel';

import WSClient from './ws_client';
import Config from './config';

class App {
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

var app = new App();

app.configure(function(config) {
  config.logger = logger;
  config.ws_server = 'ws://127.0.0.1:7332/ws';
});

app.start();
