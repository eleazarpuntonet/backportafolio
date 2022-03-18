import { Module } from '@nestjs/common';
import { AboutsService } from './abouts.service';
import { AboutsController } from './abouts.controller';

@Module({
  controllers: [AboutsController],
  providers: [AboutsService]
})
export class AboutsModule {}
