import { Connection } from 'mongoose';
import { SkillSchema } from '../schemas/skill.schema';

export const skillsProviders = [
  {
    provide: 'SKILLS_MODEL',
    useFactory: (connection: Connection) => connection.model('skills', SkillSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];