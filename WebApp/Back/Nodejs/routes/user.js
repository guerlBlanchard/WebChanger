var express = require('express');
var router = express.Router();
const controller = require('../Database/Controller/account.controller')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', controller.findUser);

router.post('/register', controller.create_account);

module.exports = router;
