import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type WorkDocument = Work & Document;
export declare class Work extends Document {
    titulo: string;
    description: string;
    link: string;
    code_link: string;
    image: string;
    tags: Record<string, any>;
    lang: string;
}
export declare const WorkSchema: mongoose.Schema<Work, mongoose.Model<Work, any, any, any>, any, any>;
