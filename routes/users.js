/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    router = express.Router(),
    users = require('../controllers/users');

router.get('/:id', users.getUser);
router.post('/', users.createUser);

module.exports = router;

