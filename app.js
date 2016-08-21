/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    config = require('./config');

var port = process.env.PORT || 3000;
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var users = require('./routes/users');

app.use('/api/users', users);

app.listen(port, function () {
    console.log('Api listening on port ' + port);
});
