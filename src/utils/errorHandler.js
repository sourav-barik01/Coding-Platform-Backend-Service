const BaseError = require("../errors/base.error");
const {StatusCodes} = require('http-status-codes');

function errorHandler(err, req, res, next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}    // bcz this is an exception so no data is going to be provided
        });
    }
    
    // Below is else part
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Something Went Wrong',
        error: err,
        data: {}    // bcz this is an exception so no data is going to be provided
    });
}

module.exports = errorHandler;