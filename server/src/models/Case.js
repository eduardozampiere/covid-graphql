const db = require('../database');
const mongoose = db.mongoose;
const Schema = mongoose.Schema;
const CaseSchema = new Schema({
	date: {
		type: String,
		required: true
	},

	infecteds: {
		type: Number,
		required: true
	},

	deads: {
		type: Number,
		required: true
	},

	state: {
		type: String,
		required: true
	},

	region: {
		type: String,
		required: true
	}
});

const Case = mongoose.model('Case', CaseSchema);
module.exports = Case;