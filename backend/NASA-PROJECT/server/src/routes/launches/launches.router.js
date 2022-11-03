const express = require('express');
const { httpGetAllLaunches, httpAddNewLaunch } = require('./launches.controller');

const launchesRouter = express.Router();

// -> the url will have /launches already set from the app.js and will end with "/" => e.g  /planets/
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;
