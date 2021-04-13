let mongoose = require('mongoose');

const  mongoAtlasUri = "mongodb+srv://baromrustamov:qup8bpw1@cluster0.swpqv.mongodb.net/getmetrough?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useMongoClient: true,  useUnifiedTopology: true },
() => console.log("Mongoose is connected")
);

module.exports = {mongoose};
