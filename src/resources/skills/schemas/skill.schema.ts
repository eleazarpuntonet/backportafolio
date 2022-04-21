import * as mongoose from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: true })
  lang: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);