"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsProviders = void 0;
const skill_schema_1 = require("../schemas/skill.schema");
exports.skillsProviders = [
    {
        provide: 'SKILLS_MODEL',
        useFactory: (connection) => connection.model('skills', skill_schema_1.SkillSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=skills.provider.js.map