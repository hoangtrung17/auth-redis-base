import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { AuthInfo } from './auth.interface';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cache: Cache,
    ) { }
    async checkToken(token: string): Promise<AuthInfo> {
        const userInfo = await this.cache.get(token);
        if (!userInfo) return { err: 'Unauthorized' };
        return { user: userInfo }
    }
}
