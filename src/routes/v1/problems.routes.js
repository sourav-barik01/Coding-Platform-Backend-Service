const express = require('express');
const problemRouter = express.Router();

const {ProblemController} = require('../../controllers/index');

problemRouter.get('/ping', ProblemController.pingProblemController);
problemRouter.post('/', ProblemController.addProblem);
problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.get('/', ProblemController.getProblems);
problemRouter.delete('/:id', ProblemController.deleteProblem);
problemRouter.put('/:id', ProblemController.updateProblem);

module.exports = problemRouter;