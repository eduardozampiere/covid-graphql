import Case from '../server/models/Case';

export const caseResolvers = {
	Query: {
		getCases: async (_, { caseInput }) => {
			console.log('getCases', caseInput);
			const filter = {};
			if (caseInput.state) filter.state = caseInput.state;
			if (caseInput.region) filter.region = caseInput.region;
			const cases = await Case.find(filter).sort({
				date: 'asc',
			});

			return cases.map((c) => {
				return {
					...c._doc,
				};
			});
		},
	},
};
