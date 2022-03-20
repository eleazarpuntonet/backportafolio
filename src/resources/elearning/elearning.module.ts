import { Module } from '@nestjs/common';
import { ElearningService } from './elearning.service';
import { ElearningController } from './elearning.controller';
import { elearningProviders } from './providers/elearning.provider';

@Module({
  controllers: [ElearningController],
  providers: [ElearningService,...elearningProviders]
})
export class ElearningModule {}
