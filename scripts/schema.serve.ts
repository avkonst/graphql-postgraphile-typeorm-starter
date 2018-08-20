import { Config } from '../src/Config';
import { Connection } from '../src/embeddedPostgraphile/config';

// simple arguments parser
const configPath = process.argv[process.argv.length - 1];
if (configPath === __filename) {
    console.log(`Config argument required. Run as: > ${__filename} path/to/config.json`);
    process.exit(1);
}
const config = Config.fromFile(configPath);
Connection.init(config);

import { exec } from 'child_process';
const child = exec(
    `postgraphile --cors -c ${Connection.instance().url} --schema ${Connection.instance().schema}`);

child.stdout.on('data', (data) => {
    console.log(data);
});
child.stderr.on('data', (data) => {
    console.log(data);
});
