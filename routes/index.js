var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/messages').messages;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages.sort((a, b) => b.added - a.added),
  });
});

module.exports = router;
