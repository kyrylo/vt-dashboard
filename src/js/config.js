class Config {
  set logger(loggerObject) {
    this._logger = loggerObject;
  }

  get logger() {
    return this._logger;
  }
}

export default Config;
