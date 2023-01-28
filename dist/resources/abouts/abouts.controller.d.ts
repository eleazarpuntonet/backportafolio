import { AboutsService } from './abouts.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { ConfigService } from '@nestjs/config';
import { AppService } from 'src/app.service';
import { Request } from 'express';
export declare class AboutsController {
    private readonly aboutsService;
    private readonly config;
    private readonly appService;
    SERVER_URL: string;
    constructor(aboutsService: AboutsService, config: ConfigService, appService: AppService);
    create(createAboutDto: CreateAboutDto, request: Request): Promise<import("./schemas/about.schema").About>;
    findAll(params: any): Promise<import("./schemas/about.schema").About[]>;
    findOne(id: string): Promise<import("./schemas/about.schema").About>;
    update(id: string, updateAboutDto: UpdateAboutDto, request: Request): Promise<import("./schemas/about.schema").About>;
    remove(id: string): Promise<import("./schemas/about.schema").About>;
}
