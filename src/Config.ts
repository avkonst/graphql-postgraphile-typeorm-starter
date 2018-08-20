import * as fs from 'fs';

export class Config {
    static fromFile(path: string): any {
        // it does not validate the config
        const config = JSON.parse(fs.readFileSync(path).toString());

        // patch paths for production run of the compiled code
        if (__filename.endsWith('.js')) {
            config.entities = [
                __dirname + '/entity/**/*' // accepts both ts and js
            ];
            config.migrations = [
                __dirname + '/migration/**/*' // accepts both ts and js
            ];
            config.subscribers = [
                __dirname + '/subscriber/**/*' // accepts both ts and js
            ];
        }

        console.log(`Running with configuration: ${path}: ${JSON.stringify(config, undefined, 4)}`);
        return config;
    }
}
