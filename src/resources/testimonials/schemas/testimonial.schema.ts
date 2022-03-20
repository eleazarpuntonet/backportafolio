import * as mongoose from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestimonialDocument = Testimonial & Document;

@Schema()
export class Testimonial extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: true })
  feedback: string;
}

export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);