/**
 * Created by sarvesh on 8/14/2016.
 */
const User = require('../models/User');

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
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save(function (err) {
        if (err)
            throw err;
        User.findById(user._id, function (err, user) {
            if (err) return err;
            res.send({
                _id: user._id,
                name: user.name,
                email: user.password
            });
        });
    });
};
