import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { TestimonialsModule } from './resources/testimonials/testimonials.module';
import { AboutsModule } from './resources/abouts/abouts.module';
import { SkillsModule } from './resources/skills/skills.module';
import { WorkModule } from './resources/work/work.module';
import { WorkexperiencesModule } from './resources/workexperiences/workexperiences.module';
import { StudiesModule } from './resources/studies/studies.module';
import { ElearningModule } from './resources/elearning/elearning.module';
import { UsersModule } from './resources/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';
import * as mongoose from 'mongoose';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV  == 'local'? '.local.env': '.env',
      isGlobal: true,
      validationSchema: Joi.object({
        SERVER_URL            : Joi.string().required(),

        DATABASE_NAME         : Joi.string().required(),
        DATABASE_USERNAME     : Joi.string().required(),
        DATABASE_PASSWORD     : Joi.string().required(),
        DATABASE_HOST         : Joi.string().required(),

        AWS_PUBLIC_BUCKET_NAME: Joi.string().required(),
        AWS_ACCESS_KEY_ID     : Joi.string().required(),
        AWS_SECRET_ACCESS_KEY : Joi.string().required(),
        AWS_REGION            : Joi.string().required(),

        PORT                  : Joi.number().required()
      })
    }),
    MulterModule.register(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../src/public'),
    }),
    DatabaseModule,
    TestimonialsModule, 
    AboutsModule, 
    SkillsModule, 
    WorkModule, 
    WorkexperiencesModule, 
    StudiesModule, 
    ElearningModule, 
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    ...databaseProviders
  ],
  exports: [AppService]
})
export class AppModule {}
