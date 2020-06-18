const Case  = require('../../models/Case');

module.exports = async ({caseInput}) => {
	const stateFilter = caseInput.state;
	const regionFilter = caseInput.region;
	const filter = {}
	if(stateFilter) filter.state = stateFilter;
	if(regionFilter) filter.region = regionFilter;

	const cases = await Case.find(filter).sort({
		date: 'asc'
	});

	return cases.map(c => {
		return {
			...c._doc,
		}
	});
}