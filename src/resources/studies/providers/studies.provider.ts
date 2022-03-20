import { Connection } from 'mongoose';
import { StudieSchema } from '../schemas/studies.schema';

export const studiesProvider = [
  {
    provide: 'STUDIES_MODEL',
    useFactory: (connection: Connection) => connection.model('studies', StudieSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];