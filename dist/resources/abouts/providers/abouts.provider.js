"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutProviders = void 0;
const about_schema_1 = require("../schemas/about.schema");
exports.aboutProviders = [
    {
        provide: 'ABOUT_MODEL',
        useFactory: (connection) => connection.model('abouts', about_schema_1.AboutSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=abouts.provider.js.map