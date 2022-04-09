import { Module } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { TestimonialsController } from './testimonials.controller';
import { testimonialProviders } from './providers/testimonial.provider';
import { AppService } from 'src/app.service';

@Module({
  controllers: [TestimonialsController],
  providers: [TestimonialsService,...testimonialProviders,AppService]
})
export class TestimonialsModule {}
