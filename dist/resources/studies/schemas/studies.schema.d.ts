import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type StudieDocument = Studie & Document;
export declare class Studie extends Document {
    titulo: string;
    description: string;
    image: string;
    year: string;
    lang: string;
}
export declare const StudieSchema: mongoose.Schema<Studie, mongoose.Model<Studie, any, any, any>, any, any>;
