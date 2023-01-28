/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { CreateWorkexperienceDto } from './dto/create-workexperience.dto';
import { UpdateWorkexperienceDto } from './dto/update-workexperience.dto';
import { WorkExperience, WorkExperienceDocument } from './schemas/workexperience.schema';
import { Model } from 'mongoose';
export declare class WorkexperiencesService {
    private worksModel;
    constructor(worksModel: Model<WorkExperienceDocument>);
    create(createWorkexperienceDto: CreateWorkexperienceDto): Promise<WorkExperience & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(lang: any): Promise<WorkExperience[]>;
    findOne(id: string): Promise<WorkExperience>;
    update(id: string, updateWorkDto: UpdateWorkexperienceDto): Promise<WorkExperience>;
    remove(id: string): Promise<WorkExperience>;
}
