/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    config = require('./config'),
    passport = require('passport');

var port = process.env.PORT || 3000;
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var users = require('./routes/users');
var auth = require('./routes/auth');

app.use('/api/users', users);
app.use('/api/auth', auth);

app.listen(port, function () {
    console.log('Api listening on port ' + port);
});
