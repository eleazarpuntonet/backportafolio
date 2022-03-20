import { Module } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { TestimonialsController } from './testimonials.controller';
import { testimonialProviders } from './providers/testimonial.provider';

@Module({
  controllers: [TestimonialsController],
  providers: [TestimonialsService,...testimonialProviders]
})
export class TestimonialsModule {}
