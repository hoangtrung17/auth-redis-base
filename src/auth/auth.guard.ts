import { CanActivate, ExecutionContext, Injectable, ForbiddenException, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Reflector } from '@nestjs/core'


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly authService: AuthService, private reflector: Reflector) {
    }
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        if (!request.headers.authorization) {
            throw new ForbiddenException('This authorization is not allow empty')
        }

        const user = await this.validateRequest(request.headers.authorization)
        request.user = JSON.parse(user)

        if (request.user.isBlock) {
            throw new ForbiddenException('Your account is blocked!')
        }


        const roles = this.reflector.get<string[]>('roles', context.getHandler())
        if (!roles) return true
        // check role match with require role
        return roles.includes(request.user.role)
    }

    async validateRequest(token: string) {
        if (!token) {
            throw new ForbiddenException('This authorization is not allow empty')
        }

        try {
            const doc = await this.authService.checkToken(token)

            if (doc.err) throw UnauthorizedException
            return doc.user
        } catch (error) { }

        throw new ForbiddenException('This authorization not match any session')
    }
}