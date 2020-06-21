import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CaseSchema = new Schema({
	date: {
		type: String,
		required: true,
	},

	infecteds: {
		type: Number,
		required: true,
	},

	deads: {
		type: Number,
		required: true,
	},

	state: {
		type: String,
		required: true,
	},

	region: {
		type: String,
		required: true,
	},
});

export default mongoose.models.cases || mongoose.model('cases', CaseSchema);
