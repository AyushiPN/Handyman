const express = require('express');
const app =express.Router();
const reg = require('../Controllers/registerController');
const log = require('../Controllers/loginController');
const head = require('../Controllers/checkUserController');

app.post('/reg',reg.reg);
app.post('/log',log.log);
app.get("/head",head.checkUser);


module.exports = app;