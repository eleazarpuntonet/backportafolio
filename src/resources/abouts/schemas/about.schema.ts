import * as mongoose from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AboutDocument = About & Document;

@Schema()
export class About extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: true })
  lang: string;
}

export const AboutSchema = SchemaFactory.createForClass(About);