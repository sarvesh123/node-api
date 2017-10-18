/**
 * Created by sarvesh on 8/14/2016.
 */
const express = require('express'),
    router = express.Router(),
    chats = require('../controllers/chats');

router.post('/getChats', chats.getChats);
router.post('/', chats.saveChats);

module.exports = router;
