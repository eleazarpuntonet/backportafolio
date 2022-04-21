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

  @Prop({ required: false })
  link: string;

  @Prop({ required: false })
  code_link: string;

  @Prop({ required: false })
  image: string;

  @Prop(raw({
    tags: []
  }))
  tags: Record<string, any>;

  @Prop({ required: true })
  lang: string;
}

export const WorkSchema = SchemaFactory.createForClass(Work);