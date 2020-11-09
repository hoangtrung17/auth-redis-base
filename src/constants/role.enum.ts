import { registerEnumType } from "@nestjs/graphql";

export enum ROLE {
    ADMIN = 'admin',
    NORMAL = 'normal',
    MANAGER = 'manager',
    MODERATOR = 'moderator',
}
registerEnumType(ROLE, { name: 'ROLE' })