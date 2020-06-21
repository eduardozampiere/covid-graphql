import { ApolloServer } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-tools';
import connectionMongo from '../../src/server/database';
import { caseResolvers } from '../../src/graphql/resolvers';
import { caseMutations } from '../../src/graphql/mutations';
import Cases from '../../src/graphql/Cases.graphql';

const resolvers = mergeResolvers([caseResolvers, caseMutations]);

const typeDefs = mergeTypeDefs([Cases]);

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const server = apolloServer.createHandler({
	path: '/api/graphql',
});

export default connectionMongo(server);
