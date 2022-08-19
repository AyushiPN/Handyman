const express = require('express');
const app =express.Router();
const reg = require('../Controllers/registerController');


app.post('/reg',reg.reg);


module.exports = app;