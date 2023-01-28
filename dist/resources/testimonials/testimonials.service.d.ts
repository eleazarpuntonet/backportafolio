import { Model } from 'mongoose';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { TestimonialDocument, Testimonial } from './schemas/testimonial.schema';
export declare class TestimonialsService {
    private testimonialModel;
    constructor(testimonialModel: Model<TestimonialDocument>);
    create(createTestimonialDto: CreateTestimonialDto): Promise<Testimonial>;
    findAll(): Promise<Testimonial[]>;
    findOne(id: string): Promise<Testimonial>;
    update(id: string, updateTestimonialDto: UpdateTestimonialDto): Promise<Testimonial>;
    remove(id: string): Promise<Testimonial>;
}
