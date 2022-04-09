import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { workProviders } from './providers/work.provider'
import { AppService } from 'src/app.service';

@Module({
  controllers: [WorkController],
  providers: [WorkService,...workProviders,AppService]
})
export class WorkModule {}
