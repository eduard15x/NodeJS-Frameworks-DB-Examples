const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();


// -> the url will have /planets already set from the app.js and will end with "/" => e.g  /planets/
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;
