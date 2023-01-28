import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AppService } from 'src/app.service';
export declare class SkillsController {
    private readonly skillsService;
    private readonly config;
    private readonly appService;
    SERVER_URL: string;
    constructor(skillsService: SkillsService, config: ConfigService, appService: AppService);
    create(createSkillDto: CreateSkillDto, request: Request): Promise<import("./schemas/skill.schema").Skill>;
    findAll(params: any): Promise<import("./schemas/skill.schema").Skill[]>;
    findOne(id: string): Promise<import("./schemas/skill.schema").Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto, request: Request): Promise<import("./schemas/skill.schema").Skill>;
    remove(id: string): Promise<import("./schemas/skill.schema").Skill>;
}
