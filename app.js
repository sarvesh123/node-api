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

var users = require('./routes/users');

app.use('/api/users', users);

app.listen(port, function () {
    console.log('Api listening on port ' + port);
});
