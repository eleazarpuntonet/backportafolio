import { Module } from '@nestjs/common';
import { StudiesService } from './studies.service';
import { StudiesController } from './studies.controller';
import { studiesProvider } from './providers/studies.provider';
import { AppService } from 'src/app.service';

@Module({
  controllers: [StudiesController],
  providers: [StudiesService,...studiesProvider,AppService]
})
export class StudiesModule {}
