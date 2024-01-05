const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messages').messages;

router.get('/', function (req, res, next) {
  res.render('form', { title: 'New Message' });
});

router.post('/', function (req, res, next) {
  const message = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };

  messages.push(message);
  res.redirect('/');
});

module.exports = router;
