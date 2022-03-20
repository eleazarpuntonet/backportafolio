import { Connection } from 'mongoose';
import { WorkExperienceSchema } from '../schemas/workexperience.schema'
export const workExperiencesProviders = [
  {
    provide: 'WORKEXPERIENCE_MODEL',
    useFactory: (connection: Connection) => connection.model('work_experience', WorkExperienceSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];