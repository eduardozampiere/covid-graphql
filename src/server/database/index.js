import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const connectDB = (handler) => async (req, res) => {
	if (mongoose.connections[0].readyState !== 1) {
		await mongoose.connect('mongodb://localhost/covidGraphql', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	}
	return handler(req, res);
};

const db = mongoose.connection;
db.once('open', () => {
	console.log('Connected to MongoDB');
});

export default connectDB;
