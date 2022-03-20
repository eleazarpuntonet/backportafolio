import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimonialsModule } from './resources/testimonials/testimonials.module';
import { AboutsModule } from './resources/abouts/abouts.module';
import { ExperiencesModule } from './resources/experiences/experiences.module';
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

@Module({
  imports: [
    DatabaseModule,
    TestimonialsModule, 
    AboutsModule, 
    ExperiencesModule, 
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
  ],
  exports: []
})
export class AppModule {}
