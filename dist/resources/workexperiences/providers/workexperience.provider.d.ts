/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Connection } from 'mongoose';
export declare const workExperiencesProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("../schemas/workexperience.schema").WorkExperience, any, any, any>;
    inject: string[];
}[];
