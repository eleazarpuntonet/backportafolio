/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Connection } from 'mongoose';
import { User } from '../schemas/user.schema';
export declare const usersProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<User, any, any, any>;
    inject: string[];
}[];
