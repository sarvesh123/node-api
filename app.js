/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-api');

app.use(bodyParser.urlencoded({ extended: true }));

var users = require('./routes/users');

app.use('/users', users);

app.listen(3000, function () {
    console.log('Api listening on port 3000');
});
