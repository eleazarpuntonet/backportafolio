import { Module } from '@nestjs/common';
import { StudiesService } from './studies.service';
import { StudiesController } from './studies.controller';
import { studiesProvider } from './providers/studies.provider';

@Module({
  controllers: [StudiesController],
  providers: [StudiesService,...studiesProvider]
})
export class StudiesModule {}
