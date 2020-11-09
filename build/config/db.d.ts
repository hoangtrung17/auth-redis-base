export declare const db: {
    development: {
        IS_DEBUG: boolean;
        DB_URL: string | undefined;
        OPTION: {
            autoIndex: boolean;
            reconnectTries: number;
            reconnectInterval: number;
            poolSize: number;
            bufferMaxEntries: number;
            connectTimeoutMS: number;
            socketTimeoutMS: number;
        };
    };
    test: {};
    staging: {};
    production: {
        URI: string | undefined;
        USERNAME: string | undefined;
        PASSWORD: string | undefined;
        IS_DEBUG: boolean;
        AUTH_DB: string | undefined;
    };
};
