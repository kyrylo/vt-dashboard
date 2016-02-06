import logger from 'loglevel';
import Timestamp from './timestamp';

export default class WSClient {
  constructor(config) {
    this.config = config;
    this.socket = null;
  }

  connect() {
    this.socket = new WebSocket(this.config.ws_server);
    this.socket.onopen = this.onopen.bind(this);
    this.socket.onclose = this.onclose.bind(this);
    this.socket.onmessage = this.onmessage.bind(this);
    this.socket.onerror = this.onerror.bind(this);
  }

  onopen(event) {
    logger.debug(`[WSClient#onopen] [${new Timestamp(event.timeStamp)}] ` +
                 `Connected to the WebSocket server (${this.config.ws_server})`);
  }

  onclose(event) {
    logger.debug(`[WSClient#onclose] [${new Timestamp(event.timeStamp)}] The ` +
                 `WebSocket connection was closed (${event.code})`);
  }

  onmessage(event) {
    logger.debug(`[WSClient#onmessage] [${new Timestamp(event.timeStamp)}] ` +
                 `${event.data}`);
  }

  onerror(event) {
    logger.error(`[WSClient#onerror] [${new Timestamp(event.timeStamp)}] Error`);
  }
}
