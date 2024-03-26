const express = require('express');
const app = express();
const {PORT} = require('./config/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
// const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');

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

app.listen(PORT, () => {
   console.log(`Server Started at ${PORT}`);
//    throw new BaseError("New Made Error", 404, {errorMessage: "Something Went Wrong!!"});
});