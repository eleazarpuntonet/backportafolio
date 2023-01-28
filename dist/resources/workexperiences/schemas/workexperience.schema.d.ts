import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type WorkExperienceDocument = WorkExperience & Document;
export declare class WorkExperience extends Document {
    nombre: string;
    cargo: string;
    description: string;
    start: string;
    end: string;
    lang: string;
}
export declare const WorkExperienceSchema: mongoose.Schema<WorkExperience, mongoose.Model<WorkExperience, any, any, any>, any, any>;
