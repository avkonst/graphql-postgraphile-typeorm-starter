const { defaultPlugins } = require('graphile-build-pg');
const {
    defaultPlugins: defaultGraphileBuildPlugins,
    MutationPayloadQueryPlugin
} = require('graphile-build');

const defaultPluginsToChange = defaultGraphileBuildPlugins.filter(
    (p: any) => p !== MutationPayloadQueryPlugin
);

export class Connection {
    private static _instance: Connection | undefined = undefined;

    url: string;
    schema: string;
    postgraphileSchemaOptions: any;

    static init(config: any) {
        this._instance = {
            // tslint:disable-next-line:max-line-length
            url: `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`,
            schema: config.schema.toString(),
            postgraphileSchemaOptions: {
                ignoreRBAC: false,
                replaceAllPlugins: [...defaultPluginsToChange, ...defaultPlugins],
                showErrorStack: false,
                extendedErrors: 'hint',

                // set it if you rely on postgresql access control
                // pgDefaultRole: "example_role2",
                // jwtSecret: "secret",
                // jwtPgTypeIdentifier: "example.jwt_token",

                // production may need to catch it and log.
                // handleErrors: (err) => {} intercept errors in production

                // A file path string. Reads cached values from local cache file
                // to improve startup time (you may want to do this in production)
                // readCache: 'path to file'

                // A file path string. Writes computed values to local cache file
                // so startup can be faster (do this during the build phase)
                // writeCache: 'path to file'
            }
        };

        if (config.logging) {
            this._instance.postgraphileSchemaOptions.showErrorStack = true;
            this._instance.postgraphileSchemaOptions.extendedErrors = 'detail';
        }
    }

    static instance(): Connection {
        if (this._instance) {
            return this._instance;
        }
        throw Error(`${__filename} Connection.init() should be invoked before it can be used`);
    }
}
