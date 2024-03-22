const express = require('express');
const problemRouter = express.Router();

const {problemController} = require('../../controllers/index');

// If any route comes and start route /ping; we map it to pingProblemController
problemRouter.get('/ping', problemController.pingProblemController);
problemRouter.post('/', problemController.addProblem);
problemRouter.get('/:id', problemController.getProblem);
problemRouter.get('/', problemController.getProblems);
problemRouter.delete('/:id', problemController.deleteProblem);
problemRouter.put('/:id', problemController.updateProblem);

module.exports = problemRouter;