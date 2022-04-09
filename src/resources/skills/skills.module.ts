import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skillsProviders } from './providers/skills.provider';
import { AppService } from 'src/app.service';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService,...skillsProviders,AppService]
})
export class SkillsModule {}
