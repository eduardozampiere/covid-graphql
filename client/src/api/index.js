import axios from 'axios';

export default {
	update: () => {
		return axios.post('http://192.168.1.3:3001/graphql', {
			query: `
				mutation {
					updateCases
				}
			`
		});

	},

	getData: () => {
		return axios.post('http://192.168.1.3:3001/graphql', {
			query: `
				query{
					cases(caseInput: {
						state: null
						region: null
					}){
						infecteds
						deads
						date
						state
						region
					}
				}
			`
		});
	}
}