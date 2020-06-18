const { buildSchema } = require('graphql');

module.exports = buildSchema(`
	type Case {
		_id: ID!
		infecteds: Int!
		deads: Int!
		state: String!
		date: String!
		region: String!
	}

	input CaseInput {
		state: String,
		region: String
	}

	type RootQuery {
		cases(caseInput: CaseInput): [Case!]!
	}

	type RootMutation {
		updateCases: Boolean
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`);