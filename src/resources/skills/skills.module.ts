import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skillsProviders } from './providers/skills.provider';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService,...skillsProviders]
})
export class SkillsModule {}
