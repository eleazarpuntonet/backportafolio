import { Module } from '@nestjs/common';
import { ElearningService } from './elearning.service';
import { ElearningController } from './elearning.controller';
import { elearningProviders } from './providers/elearning.provider';
import { AppModule } from 'src/app.module';
import { AppService } from 'src/app.service';

@Module({
  controllers: [ElearningController],
  providers: [ElearningService,...elearningProviders,AppService]
})
export class ElearningModule {}
