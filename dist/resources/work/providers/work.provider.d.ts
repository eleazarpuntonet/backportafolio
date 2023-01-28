/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Connection } from 'mongoose';
import { Work } from '../schemas/work.schema';
export declare const workProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<Work, any, any, any>;
    inject: string[];
}[];
