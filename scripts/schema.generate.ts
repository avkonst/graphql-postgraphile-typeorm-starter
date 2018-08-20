import { Config } from '../src/Config';

import { Connection } from '../src/embeddedPostgraphile/config';

const { postgraphile } = require('postgraphile');

// simple arguments parser
const configPath = process.argv[process.argv.length - 1];
if (configPath === __filename) {
    console.log(`Config argument required. Run as: > ${__filename} path/to/config.json`);
    process.exit(1);
}
const config = Config.fromFile(configPath);

Connection.init(config);

postgraphile(Connection.instance().url, Connection.instance().schema, {
    ...Connection.instance().postgraphileSchemaOptions,
    exportGqlSchemaPath: './src/generated/postgraphile.graphql'
});
