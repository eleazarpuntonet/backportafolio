import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type AboutDocument = About & Document;
export declare class About extends Document {
    titulo: string;
    description: string;
    image: string;
    lang: string;
}
export declare const AboutSchema: mongoose.Schema<About, mongoose.Model<About, any, any, any>, any, any>;
