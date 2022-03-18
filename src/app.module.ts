import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimonialsModule } from './resources/testimonials/testimonials.module';
import { AboutsModule } from './resources/abouts/abouts.module';
import { ExperiencesModule } from './resources/experiences/experiences.module';
import { SkillsModule } from './resources/skills/skills.module';
import { WorkModule } from './resources/work/work.module';
import { WorkexperiencesModule } from './resources/workexperiences/workexperiences.module';
import { StudiesModule } from './resources/studies/studies.module';
import { ElearningModule } from './resources/elearning/elearning.module';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [TestimonialsModule, AboutsModule, ExperiencesModule, SkillsModule, WorkModule, WorkexperiencesModule, StudiesModule, ElearningModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
