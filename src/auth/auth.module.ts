import { CacheModule, Global, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import * as redisStore from 'cache-manager-ioredis'
import {redisConfig} from "../config";


@Global()
@Module({
    imports: [
        CacheModule.registerAsync({
            useFactory: () => {
                return {
                    store: redisStore,
                    host: redisConfig.host,
                    port: redisConfig.port,
                    password: redisConfig.password,
                }
            },
        })
    ],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule { }
