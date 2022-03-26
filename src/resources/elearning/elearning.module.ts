import { Module } from '@nestjs/common';
import { ElearningService } from './elearning.service';
import { ElearningController } from './elearning.controller';
import { elearningProviders } from './providers/elearning.provider';
import { AppModule } from 'src/app.module';

@Module({
  controllers: [ElearningController],
  providers: [ElearningService,...elearningProviders]
})
export class ElearningModule {}
