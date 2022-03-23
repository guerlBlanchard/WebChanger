const express = require("express");
const router = express.Router();
const db = require('../../Database/Controller/account.controller');

router.get('/', function(req, res) {
    res.send('The GET option is currently unavailable in this route');
});

router.post('/login', db.findAccount);

router.post('/register', db.createAccount);