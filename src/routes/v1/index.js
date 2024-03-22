const express = require('express');
const v1Router = express.Router();

const problemRouter = require('./problems.routes');

// If any route comes and start route /problems; we map it to problemRouter
v1Router.use('/problems', problemRouter);

module.exports = v1Router;