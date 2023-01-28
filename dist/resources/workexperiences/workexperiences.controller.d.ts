/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { WorkexperiencesService } from './workexperiences.service';
import { CreateWorkexperienceDto } from './dto/create-workexperience.dto';
import { UpdateWorkexperienceDto } from './dto/update-workexperience.dto';
export declare class WorkexperiencesController {
    private readonly workexperiencesService;
    constructor(workexperiencesService: WorkexperiencesService);
    create(createWorkexperienceDto: CreateWorkexperienceDto): Promise<import("./schemas/workexperience.schema").WorkExperience & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(params: any): Promise<import("./schemas/workexperience.schema").WorkExperience[]>;
    findOne(id: string): Promise<import("./schemas/workexperience.schema").WorkExperience>;
    update(id: string, updateWorkexperienceDto: UpdateWorkexperienceDto): Promise<import("./schemas/workexperience.schema").WorkExperience>;
    remove(id: string): Promise<import("./schemas/workexperience.schema").WorkExperience>;
}
