// patch for missed fetch in production
(global as any).fetch = require('node-fetch');

import { importSchema } from 'graphql-import';
import { ApolloServer, gql } from 'apollo-server';

import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { Config } from './Config';
import { Connection } from './embeddedPostgraphile/config';
import { Binding } from './generated/postgraphile';
import resolvers from './resolvers';

// simple arguments parser
const configPath = process.argv[process.argv.length - 1];
if (configPath === __filename) {
    console.log(`Config argument required. Run as: > ${__filename} path/to/config.json`);
    process.exit(1);
}
const config = Config.fromFile(configPath);

createConnection(config).then(async connection => {
    // load end user facing graphql schema
    const typeDefs = gql(importSchema(__dirname + '/schema.graphql'));

    // connect postgraphile bindings with the postgres DB using typeorm configuration
    Connection.init(config);
    const postgraphileConnection = new Binding();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        mocks: true,
        // onHealthCheck: () => fetch('https://fourtonfish.com/hellosalut/?mode=auto'),
        context: (c: any) => ({
            ...c,
            orm: connection,
            gql: postgraphileConnection
        })
    });

    const url = await server.listen();
    console.log(`Graphql API server is running on ${url.url}`);
}).catch(error => console.log(error));
