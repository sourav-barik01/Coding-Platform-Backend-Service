const NotImplemented = require('../errors/notImplemented');

function pingProblemController(req, res) {
    res.json({message: "Problem Controller is running"});
}

function addProblem(req, res, next) {
    try {
        throw new NotImplemented('addProblem');
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