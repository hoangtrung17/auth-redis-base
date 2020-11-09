"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE = void 0;
var graphql_1 = require("@nestjs/graphql");
var ROLE;
(function (ROLE) {
    ROLE["ADMIN"] = "admin";
    ROLE["NORMAL"] = "normal";
    ROLE["MANAGER"] = "manager";
    ROLE["MODERATOR"] = "moderator";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
graphql_1.registerEnumType(ROLE, { name: 'ROLE' });
