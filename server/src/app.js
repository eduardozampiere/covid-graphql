const express = require('express');
const graphqlHttp = require('express-graphql');
const database = require('./database');
const cors = require('cors');

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');
class App{
	constructor(){
		this.app = express();
		this.database();
		this.middlewares();
		this.graphql();
	}

	middlewares = () => {
		this.app.use(cors({

		}));
		
	}

	database = () => {
		database.connect();
	}

	graphql = () => {
		this.app.use('/graphql', graphqlHttp({
			schema: graphqlSchema,
			rootValue: graphqlResolvers,
			graphiql: true
		}));
	}
}

module.exports = new App().app;