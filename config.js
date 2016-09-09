var uuid = require('node-uuid');

module.exports = {
    'secret': uuid.v1(),
    'database': 'mongodb://localhost/node-api',
    'tokenExpireTime': 86400,
    'twitter': {
        'consumerKey': 'dsbval0zrS4VnL1ZxR9A9LSO6',
        'consumerSecret': 'aqifUMjk0z8AE6GaAQcD8a5ZHnWLzTDhO49zMFBqTZFOwvdx1W',
        'callbackURL': 'http://localhost:3000/api/auth/twitter/callback'
    }
};