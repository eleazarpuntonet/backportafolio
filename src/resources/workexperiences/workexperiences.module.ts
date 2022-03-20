import { Module } from '@nestjs/common';
import { WorkexperiencesService } from './workexperiences.service';
import { WorkexperiencesController } from './workexperiences.controller';
import { workExperiencesProviders } from './providers/workexperience.provider';

@Module({
  controllers: [WorkexperiencesController],
  providers: [WorkexperiencesService,...workExperiencesProviders]
})
export class WorkexperiencesModule {}
