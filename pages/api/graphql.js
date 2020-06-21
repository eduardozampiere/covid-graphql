import { ApolloServer } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-tools';
import connectionMongo from '../../src/server/database';
import { caseResolvers } from '../../src/graphql/resolvers';
import { caseMutations } from '../../src/graphql/mutations';
import Cases from '../../src/graphql/Cases.graphql';

import cors from 'micro-cors';
const Cors = cors();

const resolvers = mergeResolvers([caseResolvers, caseMutations]);

const typeDefs = mergeTypeDefs([Cases]);

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	cors: false,
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = apolloServer.createHandler({
	path: '/api/graphql',
});

const server = Cors((req, res) => {
	req.method === 'OPTIONS' ? res.end() : handler(req, res);
});

export default connectionMongo(server);
