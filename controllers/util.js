const jwt = require('jsonwebtoken'),
    config = require('../config');

exports.getAuthToken = function (user) {
    return jwt.sign(user, config.secret, {
        expiresIn: config.tokenExpireTime // expires in 24 hours
    });
};
