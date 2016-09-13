/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    config = require('./config'),
    passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy;

var port = process.env.PORT || 3000;
mongoose.connect(config.database);

require('./config/passport')(passport); // pass passport for configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var users = require('./routes/users');
var auth = require('./routes/auth');
var chats = require('./routes/chats');

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/chats', chats);

app.listen(port, function () {
    console.log('Api listening on port ' + port);
});
