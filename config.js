var uuid = require('node-uuid');

module.exports = {
    'secret': uuid.v1(),
    'database': 'mongodb://localhost/node-api',
    'tokenExpireTime': 86400
};