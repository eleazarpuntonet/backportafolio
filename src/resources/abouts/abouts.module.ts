import { Module } from '@nestjs/common';
import { AboutsService } from './abouts.service';
import { AboutsController } from './abouts.controller';
import { aboutProviders } from './providers/abouts.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ConfigModule],
  controllers: [AboutsController],
  providers: [AboutsService, ...aboutProviders]
})
export class AboutsModule {}
