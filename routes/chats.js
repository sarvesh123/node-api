/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    router = express.Router(),
    chats = require('../controllers/chats');

router.get('/:receiver', chats.getChats);
router.post('/', chats.saveChats);

module.exports = router;
