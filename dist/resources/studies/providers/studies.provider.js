"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studiesProvider = void 0;
const studies_schema_1 = require("../schemas/studies.schema");
exports.studiesProvider = [
    {
        provide: 'STUDIES_MODEL',
        useFactory: (connection) => connection.model('studies', studies_schema_1.StudieSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=studies.provider.js.map