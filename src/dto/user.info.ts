import { ObjectType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ObjectType()
export class UserInfoType {
    @Field()
    @IsOptional()
    id?: string

    @Field()
    @IsOptional()
    name?: string

    @Field()
    @IsOptional()
    winId?: string

    @Field()
    @IsOptional()
    avatar?: string

    @Field()
    @IsOptional()
    fcm_token?: string

    @Field()
    isBlock?: boolean

    constructor(partial: Partial<any>) {
        this.id = partial._id ? partial._id.toString(): partial.id;
        this.name = partial.name
        this.winId = partial.winId
        this.avatar = partial.avatar
        this.fcm_token = partial.fcm_token
        this.isBlock = partial.isBlock
    }
}