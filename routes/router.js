const express = require('express');
const service = require('../services/render')
const dashboardController = require('../controllers/dashboardController')

const route = express.Router();

route.post('/chat',service.chatRoute)

route.get('/login',service.homeRoute);
route.get('/', dashboardController.dashboard);



module.exports = route;