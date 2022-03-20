import * as mongoose from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkDocument = Work & Document;

@Schema()
export class Work extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  description: string;

//   @Prop({ required: true })
  link: string;

//   @Prop({ required: true })
  code_link: string;

//   @Prop({ required: true })
  image: any;

  @Prop(raw({
    tags: []
  }))
  tags: Record<string, any>;
}

export const WorkSchema = SchemaFactory.createForClass(Work);