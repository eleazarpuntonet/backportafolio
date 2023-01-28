import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type ElearningDocument = Elearning & Document;
export declare class Elearning extends Document {
    titulo: string;
    description: string;
    image: string;
    lang: string;
}
export declare const ElearningSchema: mongoose.Schema<Elearning, mongoose.Model<Elearning, any, any, any>, any, any>;
