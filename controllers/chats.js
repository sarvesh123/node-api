/**
 * Created by sarvesh on 8/14/2016.
 */
const Chat = require('../models/Chat'),
    config = require('../config'),
    userUtil = require('./util');

exports.getChats = function (req, res) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // if (token && userUtil.validateToken(token)) {
        Chat.find({
            $or: [ {sender: req.body.sender}, {sender: req.body.receiver}],
            $or: [ {receiver: req.body.receiver}, {receiver: req.body.sender}]
        }, function (err, chats) {
            console.log( chats );
            if (err) return err;
            res.send({
                status: true,
                messages: chats
            });
        });
    // }
    // else {
    //     res.json({ status: false, message: 'Failed to authenticate token.' });
    // }
};

exports.saveChats = function (req, res) {
    const chat = new Chat({
        sender: req.body.sender,
        receiver: req.body.receiver,
        message: req.body.message
    });
    chat.save(function (err, chat) {
        if (err)
            throw err;
        res.json({
            status: true,
            message: 'Saved',
        });
    });
};
