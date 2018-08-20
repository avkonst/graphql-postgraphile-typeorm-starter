const {
    withPostGraphileContext,
    createPostGraphileSchema
} = require('postgraphile');

import { makeRemoteExecutableSchema } from 'graphql-tools';
import * as fs from 'fs';
import { FetcherOperation } from 'graphql-tools/dist/stitching/makeRemoteExecutableSchema';
import { execute } from 'graphql';
import { Pool } from 'pg';
import { Connection } from './config';

let _schema: any;
const getSchema = async () => {
    if (!_schema) {
        _schema = await createPostGraphileSchema(
            Connection.instance().url,
            Connection.instance().schema,
            Connection.instance().postgraphileSchemaOptions
        );
        return _schema;
    } else {
        return _schema;
    }
};

let pgPool: Pool | undefined = undefined;
function initPgPool() {
    pgPool = new Pool({ connectionString: Connection.instance().url });
    return pgPool;
}

const fetcher = async (operation: FetcherOperation) => {
    const graphqlContext = operation.context
        ? operation.context.graphqlContext
        : {};

    const postGraphileContextOptions = {
        ...Connection.instance().postgraphileSchemaOptions,
        ...graphqlContext,
        pgPool: pgPool || initPgPool()
    };
    const postgraphileSchema = await getSchema();
    const result = withPostGraphileContext(postGraphileContextOptions, (context: any) =>
        execute(
            postgraphileSchema,
            operation.query,
            null,
            context,
            operation.variables,
            operation.operationName
        )
    );
    return result;
};

const typeDefs = fs.readFileSync('./src/generated/postgraphile.graphql', 'utf-8');
const schema = makeRemoteExecutableSchema({ fetcher, schema: typeDefs });

export default schema;
