import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type SkillDocument = Skill & Document;
export declare class Skill extends Document {
    titulo: string;
    description: string;
    image: string;
    lang: string;
}
export declare const SkillSchema: mongoose.Schema<Skill, mongoose.Model<Skill, any, any, any>, any, any>;
