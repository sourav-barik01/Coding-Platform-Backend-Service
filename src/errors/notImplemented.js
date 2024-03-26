const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotImplemented extends BaseError {
    constructor(methodName) {
        super("Internal-Server Error", StatusCodes.NOT_IMPLEMENTED, `${methodName} Not Implemented`, {});
    }
}

module.exports = NotImplemented;