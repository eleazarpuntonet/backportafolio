import { Module } from '@nestjs/common';
import { AboutsService } from './abouts.service';
import { AboutsController } from './abouts.controller';
import { aboutProviders } from './providers/abouts.provider';

@Module({
  controllers: [AboutsController],
  providers: [AboutsService, ...aboutProviders]
})
export class AboutsModule {}
