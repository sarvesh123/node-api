/**
 * Created by sarvesh on 8/14/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
    sender: String,
    receiver: String,
    message: String
});

var Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;