"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workExperiencesProviders = void 0;
const workexperience_schema_1 = require("../schemas/workexperience.schema");
exports.workExperiencesProviders = [
    {
        provide: 'WORKEXPERIENCE_MODEL',
        useFactory: (connection) => connection.model('work_experience', workexperience_schema_1.WorkExperienceSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=workexperience.provider.js.map