const express = require('express');
const app = express();
const {PORT} = require('./config/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
// const Problem = require('./models/problem.model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


// If any req come & route start with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message: 'Program is Alive'});
})

// Last Middleware if any error comes
app.use(errorHandler);

app.listen(PORT, async() => {
    console.log(`Server Started at ${PORT}`);
   // throw new BaseError("New Made Error", 404, {errorMessage: "Something Went Wrong!!"});
    await connectToDB();
    console.log("DB Successfully Connected!!");
});