import { ElearningService } from './elearning.service';
import { CreateElearningDto } from './dto/create-elearning.dto';
import { UpdateElearningDto } from './dto/update-elearning.dto';
import { ConfigService } from '@nestjs/config';
import { AppService } from 'src/app.service';
import { Request } from 'express';
export declare class ElearningController {
    private readonly elearningService;
    private readonly config;
    private readonly appService;
    SERVER_URL: string;
    constructor(elearningService: ElearningService, config: ConfigService, appService: AppService);
    create(createElearningDto: CreateElearningDto, request: Request): Promise<import("./schemas/elearning.schema").Elearning>;
    findAll(params: any): Promise<import("./schemas/elearning.schema").Elearning[]>;
    findOne(id: string): Promise<import("./schemas/elearning.schema").ElearningDocument>;
    update(id: string, updateElearningDto: UpdateElearningDto, request: Request): Promise<import("./schemas/elearning.schema").Elearning>;
    remove(id: string): Promise<import("./schemas/elearning.schema").Elearning>;
}
