import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { workProviders } from './providers/work.provider'

@Module({
  controllers: [WorkController],
  providers: [WorkService,...workProviders]
})
export class WorkModule {}
