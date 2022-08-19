const express = require('express');
const app =express.Router();
const log = require('../Controllers/loginController');

app.post('/log,',log.log);
module.exports = app;