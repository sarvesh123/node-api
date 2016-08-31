/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    router = express.Router(),
    auth = require('../controllers/auth');

router.get('/twitter', auth.twitter);
router.post('/twitter/callback', auth.twitterCallback);

module.exports = router;

