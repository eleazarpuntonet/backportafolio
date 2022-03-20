import { Connection } from 'mongoose';
import { WorkSchema, Work } from '../schemas/work.schema'
export const workProviders = [
  {
    provide: 'WORK_MODEL',
    useFactory: (connection: Connection) => connection.model('works', WorkSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];