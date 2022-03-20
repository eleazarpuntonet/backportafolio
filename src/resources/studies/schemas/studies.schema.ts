import * as mongoose from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudieDocument = Studie & Document;

@Schema()
export class Studie extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: true })
  year: string;
}

export const StudieSchema = SchemaFactory.createForClass(Studie);