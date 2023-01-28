/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { WorkDocument, Work } from './schemas/work.schema';
import { Model } from 'mongoose';
export declare class WorkService {
    private worksModel;
    constructor(worksModel: Model<WorkDocument>);
    create(createWorkDto: CreateWorkDto): Promise<Work>;
    findAll(lang: any): Promise<Work[]>;
    findOne(id: string): Promise<Work & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateWorkDto: UpdateWorkDto): Promise<Work>;
    remove(id: string): Promise<Work>;
}
