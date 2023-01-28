import { StudiesService } from './studies.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AppService } from 'src/app.service';
export declare class StudiesController {
    private readonly studiesService;
    private readonly appService;
    private readonly config;
    SERVER_URL: string;
    constructor(studiesService: StudiesService, appService: AppService, config: ConfigService);
    create(createStudyDto: CreateStudyDto, request: Request): Promise<import("./schemas/studies.schema").Studie>;
    findAll(params: any): Promise<import("./schemas/studies.schema").Studie[]>;
    findOne(id: string): Promise<import("./schemas/studies.schema").Studie>;
    update(id: string, updateStudyDto: UpdateStudyDto, request: Request): Promise<import("./schemas/studies.schema").Studie>;
    remove(id: string): Promise<import("./schemas/studies.schema").Studie>;
}
