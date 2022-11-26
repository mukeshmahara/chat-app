const express = require('express');
const service = require('../services/render')
const dashboardController = require('../controllers/dashboardController')

const route = express.Router();

route.post('/chat',service.chatRoute)

route.get('/',service.homeRoute);
route.get('/dashboard', dashboardController.dashboard);



module.exports = route;