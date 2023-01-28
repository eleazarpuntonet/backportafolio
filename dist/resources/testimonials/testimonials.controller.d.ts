/// <reference types="multer" />
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { ConfigService } from '@nestjs/config';
import { AppService } from 'src/app.service';
import { Request } from 'express';
export declare class TestimonialsController {
    private readonly testimonialsService;
    private readonly config;
    private readonly appService;
    SERVER_URL: string;
    constructor(testimonialsService: TestimonialsService, config: ConfigService, appService: AppService);
    create(createTestimonialDto: CreateTestimonialDto, request: Request): Promise<import("./schemas/testimonial.schema").Testimonial>;
    findAll(): Promise<import("./schemas/testimonial.schema").Testimonial[]>;
    findOne(id: string): Promise<import("./schemas/testimonial.schema").Testimonial>;
    update(id: string, updateTestimonialDto: UpdateTestimonialDto, image: Express.Multer.File, request: Request): Promise<import("./schemas/testimonial.schema").Testimonial>;
    remove(id: string): Promise<import("./schemas/testimonial.schema").Testimonial>;
}
