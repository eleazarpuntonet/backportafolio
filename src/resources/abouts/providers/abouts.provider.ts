import { Connection } from 'mongoose';
import { AboutSchema } from '../schemas/about.schema';

export const aboutProviders = [
  {
    provide: 'ABOUT_MODEL',
    useFactory: (connection: Connection) => connection.model('abouts', AboutSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];