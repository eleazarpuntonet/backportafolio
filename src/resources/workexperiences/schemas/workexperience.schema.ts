import * as mongoose from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkExperienceDocument = WorkExperience & Document;

@Schema()
export class WorkExperience extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  cargo: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  start: string;

  @Prop({ required: false })
  end: string;
}

export const WorkExperienceSchema = SchemaFactory.createForClass(WorkExperience);