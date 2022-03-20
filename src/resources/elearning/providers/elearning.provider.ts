import { Connection } from 'mongoose';
import { ElearningSchema } from '../schemas/elearning.schema';

export const elearningProviders = [
  {
    provide: 'ELEARNING_MODEL',
    useFactory: (connection: Connection) => connection.model('e_learning', ElearningSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];