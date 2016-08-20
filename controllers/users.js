/**
 * Created by sarvesh on 8/14/2016.
 */
const User = require('../models/User'),
    config = require('../config'),
    userUtil = require('./util');

exports.getUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return err;
        res.send({
            _id: user._id,
            name: user.name
        });
    });
};

exports.createUser = function (req, res) {
    User.find({
        email: req.body.email
    }, function (err, user) {
        if (Object.keys(user).length) {
            res.json({
                success: false,
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
                    success: true,
                    message: 'Logged In!',
                    token: token
                });
            });
        }
    });
};
