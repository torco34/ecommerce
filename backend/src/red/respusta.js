exports.success = function (res, message, status = 200) {
    return res.status(status).send({
        error: false,
        status,
        message
    });
};

exports.error = function (req, res, message = 'error interno', status = 500) {

    return res.status(statusCode).send({
        error: true,
        status,
        message
    });
}