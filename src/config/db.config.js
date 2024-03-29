const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB(){
    try {
        if(NODE_ENV == "development"){
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        console.log("Unable To Connect To DB Servers!! Plz Try Again Later");
        console.log(error);
    }
}

module.exports = connectToDB;