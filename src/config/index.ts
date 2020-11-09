import * as dotEnv from 'dotenv';

dotEnv.config();
export const redisConfig = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379'),
    db: parseInt(process.env.REDIS_DB || '1'),
    password: process.env.REDIS_PASSWORD,
}
