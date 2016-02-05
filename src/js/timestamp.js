export default class Timestamp {
  constructor(unix_timestamp) {
    this.date = new Date(unix_timestamp);
  }

  toString() {
    return this.date.toLocaleTimeString();
  }
}
