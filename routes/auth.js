/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    router = express.Router(),
    auth = require('../controllers/auth'),
    passport = require('passport');

// router.get('/twitter/callback', passport.authenticate('twitter', {
//             	successRedirect : '/profile',
//             	failureRedirect : '/'
//         	})
// 	);
router.get('/twitter', passport.authenticate('twitter'));

module.exports = router;

