"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elearningProviders = void 0;
const elearning_schema_1 = require("../schemas/elearning.schema");
exports.elearningProviders = [
    {
        provide: 'ELEARNING_MODEL',
        useFactory: (connection) => connection.model('e_learning', elearning_schema_1.ElearningSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=elearning.provider.js.map