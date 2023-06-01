const mongoose = require('mongoose');

function dbConnection() {
    mongoose.connect('mongodb+srv://orebiEcommerce:mahin020809@cluster1.s1k9zfe.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('Connected!'));
}

module.exports = dbConnection