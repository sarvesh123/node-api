/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    router = express.Router(),
    users = require('../controllers/users');

router.get('/profile', isLoggedIn, users.profile);
router.get('/:id', users.getUser);
router.post('/', users.createUser);
router.post('/login', users.login);

function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	
	// if they aren't redirect them to the home page
	res.json({ status: false, message: 'Failed to authenticate token.' });
}

module.exports = router;
