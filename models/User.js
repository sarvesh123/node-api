/**
 * Created by sarvesh on 8/14/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;