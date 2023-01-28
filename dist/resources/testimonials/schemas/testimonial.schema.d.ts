import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type TestimonialDocument = Testimonial & Document;
export declare class Testimonial extends Document {
    nombre: string;
    company: string;
    image: string;
    feedback: string;
    linkedin: string;
}
export declare const TestimonialSchema: mongoose.Schema<Testimonial, mongoose.Model<Testimonial, any, any, any>, any, any>;
