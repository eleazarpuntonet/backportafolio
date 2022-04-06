import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import * as mongoose from 'mongoose';
import { databaseProviders } from './database.providers';
@Global()
@Module({
    imports:[ConfigModule],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
  })
export class DatabaseModule {}
