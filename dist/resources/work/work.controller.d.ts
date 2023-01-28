/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AppService } from 'src/app.service';
export declare class WorkController {
    private readonly workService;
    private readonly appService;
    private readonly config;
    SERVER_URL: string;
    constructor(workService: WorkService, appService: AppService, config: ConfigService);
    create(createWorkDto: CreateWorkDto, request: Request): Promise<import("./schemas/work.schema").Work>;
    findAll(params: any): Promise<import("./schemas/work.schema").Work[]>;
    findOne(id: string): Promise<import("./schemas/work.schema").Work & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateWorkDto: UpdateWorkDto, request: Request): Promise<import("./schemas/work.schema").Work>;
    remove(id: string): Promise<import("./schemas/work.schema").Work>;
}
