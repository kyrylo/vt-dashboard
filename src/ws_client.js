import Timestamp from './timestamp';

class WSClient {
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
    var timestamp = new Timestamp(event.timeStamp);
    this.config.logger.debug(`[WSClient#onopen] [${timestamp}] Connected to` +
                             ` the WebSocket server (${this.config.ws_server})`);
  }

  onclose(event) {
    var timestamp = new Timestamp(event.timeStamp);
    this.config.logger.debug(`[WSClient#onclose] [${timestamp}] The WebSocket` +
                             ` connection was closed (${event.code})`);
  }

  onmessage(event) {
    var timestamp = new Timestamp(event.timeStamp);
    this.config.logger.debug(`[WSClient#onmessage] [${timestamp}] ${event.data}`);
  }

  onerror(error) {
    var timestamp = new Timestamp(event.timeStamp);
    this.config.logger.error(`[WSClient#onerror] [${timestamp}] ${error}`);
  }
}

export default WSClient;
