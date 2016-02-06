export default class Config {
  set ws_server(url) {
    this._ws_server = url;
  }

  get ws_server() {
    return this._ws_server;
  }
}
