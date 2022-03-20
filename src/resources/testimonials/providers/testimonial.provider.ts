import { Connection } from 'mongoose';
import { TestimonialSchema } from '../schemas/testimonial.schema';
export const testimonialProviders = [
  {
    provide: 'TESTIMONIAL_MODEL',
    useFactory: (connection: Connection) => connection.model('testimonials', TestimonialSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];