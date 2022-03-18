import { Module } from '@nestjs/common';
import { WorkexperiencesService } from './workexperiences.service';
import { WorkexperiencesController } from './workexperiences.controller';

@Module({
  controllers: [WorkexperiencesController],
  providers: [WorkexperiencesService]
})
export class WorkexperiencesModule {}
