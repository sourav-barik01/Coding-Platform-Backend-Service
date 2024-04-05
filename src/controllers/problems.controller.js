const NotImplemented = require('../errors/notImplemented');
const {ProblemService} = require('../services');
const {ProblemRepository} = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    res.json({message: "Problem Controller is running"});
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully Created New Problem',
            error: {},
            data: newProblem
        });
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully Fetched a Problem',
            error: {},
            data: problem
        });
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(200).json({
            success: true,
            message: 'Successfully Fetched All Problems',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {

}

function deleteProblem(req, res, next) {
    
}

module.exports = {
    addProblem, getProblem, getProblems, updateProblem, deleteProblem, pingProblemController
}