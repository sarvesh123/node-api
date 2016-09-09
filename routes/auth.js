/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/twitter/callback', 
	passport.authenticate('twitter', {
		failureRedirect : '/'
    }), function (req, res) {
    	res.redirect('http://localhost:4200/login/twitter');
    }
);
router.get('/twitter', passport.authenticate('twitter'));

module.exports = router;

