class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode; //Adds code property to instances
  }
}

module.exports = HttpError;
