import * as mongoose from 'mongoose';
const localConnection =   {
  provide: 'DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect(`mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`),
}


const productionConnection = {
  provide: 'DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?authSource=admin&replicaSet=atlas-ialgos-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`),
}

const isLocalEnvironment = process.env.NODE_ENV === 'local'

export const databaseProviders = [
  isLocalEnvironment ? localConnection : productionConnection
];
