"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoType = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var UserInfoType = /** @class */ (function () {
    function UserInfoType(partial) {
        this.id = partial._id ? partial._id.toString() : partial.id;
        this.name = partial.name;
        this.winId = partial.winId;
        this.avatar = partial.avatar;
        this.fcm_token = partial.fcm_token;
        this.isBlock = partial.isBlock;
    }
    __decorate([
        graphql_1.Field(),
        class_validator_1.IsOptional()
    ], UserInfoType.prototype, "id", void 0);
    __decorate([
        graphql_1.Field(),
        class_validator_1.IsOptional()
    ], UserInfoType.prototype, "name", void 0);
    __decorate([
        graphql_1.Field(),
        class_validator_1.IsOptional()
    ], UserInfoType.prototype, "winId", void 0);
    __decorate([
        graphql_1.Field(),
        class_validator_1.IsOptional()
    ], UserInfoType.prototype, "avatar", void 0);
    __decorate([
        graphql_1.Field(),
        class_validator_1.IsOptional()
    ], UserInfoType.prototype, "fcm_token", void 0);
    __decorate([
        graphql_1.Field()
    ], UserInfoType.prototype, "isBlock", void 0);
    UserInfoType = __decorate([
        graphql_1.ObjectType()
    ], UserInfoType);
    return UserInfoType;
}());
exports.UserInfoType = UserInfoType;
