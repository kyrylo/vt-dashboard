export default class Config {
  set logger(loggerObject) {
    this._logger = loggerObject;
  }

  get logger() {
    return this._logger;
  }
}
