exports.success = function (res, message, status = 200) {
    const statusCode = status || 200;
    const messageOk = message || ''
    return res.status(statusCode).send({
        error: false,
        status: statusCode,
        message: messageOk
    });
}

exports.error = function (res, message, status = 500) {
    const statusCode = status || 500;
    const messageErr = message || 'error interno bbb';
    return res.status(statusCode).send({
        error: true,
        status: statusCode,
        message: messageErr
    });
}