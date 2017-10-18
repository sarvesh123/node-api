/**
 * Created by sarvesh on 8/14/2016.
 */
const User = require('../models/User'),
    config = require('../config'),
    userUtil = require('./util');

exports.getOnlineUsers = function(req, res) {
    User.find({
        online: true
    }, function(err, users) {
        if (Object.keys(users).length) {
            res.json({
                status: true,
                users: users
            })
        }
        else {
            res.json({
                status: false,
                message: 'No Online Users found'
            })
        }
    })
}

exports.getUser = function (req, res) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token && userUtil.validateToken(token)) {
        User.findById(req.params.id, function (err, user) {
            if (err) return err;
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email
            });
        });
    }
    else {
        res.json({ status: false, message: 'Failed to authenticate token.' });
    }
};

exports.createUser = function (req, res) {
    User.find({
        email: req.body.email
    }, function (err, user) {
        if (Object.keys(user).length) {
            res.json({
                status: false,
                message: 'User Exists'
            });
        }
        else {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            user.save(function (err, user) {
                if (err)
                    throw err;
                var token = userUtil.getAuthToken(user);
                res.json({
                    status: true,
                    message: 'Logged In!',
                    token: token,
                    user: {
                        name: user.name,
                        email: user.email
                    }
                });
            });
        }
    });
};

exports.login = function (req, res) {
    User.find({
        email: req.body.email
    }, function (err, user) {
        if (Object.keys(user).length) {
            if (user[0].password == req.body.password) {
                console.log(user[0])
                User.update({
                    _id: user[0]._id
                }, {
                    $set: {
                        online: true
                    }
                }, {
                    upsert: true,
                    strict: false
                }, function (err, response) {
                    if (err) {
                        console.log('Error:', err);
                    }
                    else {
                        console.log('Update user,', response)
                    }
                })

                var token = userUtil.getAuthToken(user[0]);
                res.json({
                    status: true,
                    message: 'Logged In!',
                    token: token,
                    user: {
                        id: user[0]._id,
                        name: user[0].name,
                        email: user[0].email
                    }
                });
            }
            else {
                res.json({
                    status: false,
                    message: 'Incorrect Username & Password'
                });
            }
        }
        else {
            res.json({
                status: false,
                message: 'Cannot find User'
            });
        }
    });
};

exports.profile = function (req, res) {
    var token = userUtil.getAuthToken(req.user);
    res.json({
        status: true,
        message: 'Logged In!',
        token: token,
        user: {
            name: req.user.name,
            email: req.user.email
        }
    });
};