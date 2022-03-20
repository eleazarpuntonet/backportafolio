import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './providers/users.provider';
import { User, UserSchema } from './schemas/user.schema';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService,...usersProviders],
  exports: [UsersService]
})
export class UsersModule {}
