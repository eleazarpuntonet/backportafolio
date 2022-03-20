import * as mongoose from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ElearningDocument = Elearning & Document;

@Schema()
export class Elearning extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;
}

export const ElearningSchema = SchemaFactory.createForClass(Elearning);