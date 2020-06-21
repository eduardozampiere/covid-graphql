import { ApolloServer } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-tools';
import connectionMongo from '../../src/server/database';
import { caseResolvers } from '../../src/graphql/resolvers';
import { caseMutations } from '../../src/graphql/mutations';
import Cases from '../../src/graphql/Cases.graphql';
import Cors from 'micro-cors';

const cors = Cors();

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

const handler = apolloServer.createHandler({
	path: '/api/graphql',
});

const handlerCors = cors(handler);

export default connectionMongo(handlerCors);
