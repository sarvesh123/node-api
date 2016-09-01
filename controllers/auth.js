/**
 * Created by sarvesh on 8/14/2016.
 */
const config = require('../config'),
    passport = require('passport'),
    Strategy = require('passport-twitter').Strategy;

passport.use(new Strategy({
    consumerKey: config.twitter.consumerKey,
    consumerSecret: config.twitter.consumerSecret,
    callbackURL: 'http://localhost:3000/api/auth/twitter/callback'
}, function (token, tokenSecret, profile, cb) {
    return cb(null, profile);
}));

exports.twitter = function (req, res) {
    console.log('Initialise');
    passport.authenticate('twitter');
};

exports.twitterCallback = function (req, res) {
    console.log('twitterCallback');
    passport.authenticate('twitter', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/');
        };
};