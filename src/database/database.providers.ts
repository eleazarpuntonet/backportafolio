import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://root:root@localhost:27017/eleazar_portafolio?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'),
  },
];