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

function getProblem(req, res) {

}

function getProblems(req, res) {
    
}

function updateProblem(req, res) {

}

function deleteProblem(req, res) {
    
}

module.exports = {
    addProblem, getProblem, getProblems, updateProblem, deleteProblem, pingProblemController
}