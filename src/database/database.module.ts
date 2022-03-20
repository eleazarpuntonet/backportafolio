import { Global, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import * as mongoose from 'mongoose';
import { databaseProviders } from './database.providers';
@Global()
@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
  })
export class DatabaseModule {}
