import gql from 'graphql-tag';
import client from '../services/apollo';

export default {
	update: async () => {
		return client.mutate({
			mutation: gql `
				mutation {
					updateCases
				}
			`
		});
	},

	getData: async (filter) => {
		return client.query({
			query: gql `
				query ($caseInput: CaseInput!){
					cases(caseInput: $caseInput){
						deads
						infecteds
						state
						date
						region
					}
				}
			`,
			variables: {
				"caseInput": {
					"state": filter.state ? filter.state : null,
					"region": filter.region ? filter.region : null
				}
			}
		});
	}
}