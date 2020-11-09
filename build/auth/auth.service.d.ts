import { AuthInfo } from './auth.interface';
import { Cache } from 'cache-manager';
export declare class AuthService {
    private readonly cache;
    constructor(cache: Cache);
    checkToken(token: string): Promise<AuthInfo>;
}
