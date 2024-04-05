const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(resourceName, resourceValue) {
        super("Not Found", StatusCodes.NOT_FOUND, `The requested resource: ${resourceName} w/ value ${resourceValue} not found`, {
            resourceName, 
            resourceValue
        });
    }
}

module.exports = BadRequest;