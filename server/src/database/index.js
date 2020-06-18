const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

async function connect(){
	try{
		await mongoose.connect("mongodb://localhost/covidGraphql", {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("MongoDB connected");
	}
	catch(err){
		console.log("Error in MongoDB connection")
	}
}

module.exports = {
	mongoose,
	connect
}