const express = require('express');
const service = require('../services/render')

const route = express.Router();

route.post('/chat',service.chatRoute)

route.get('/',service.homeRoute);



module.exports = route;