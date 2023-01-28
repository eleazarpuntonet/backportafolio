"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workProviders = void 0;
const work_schema_1 = require("../schemas/work.schema");
exports.workProviders = [
    {
        provide: 'WORK_MODEL',
        useFactory: (connection) => connection.model('works', work_schema_1.WorkSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=work.provider.js.map