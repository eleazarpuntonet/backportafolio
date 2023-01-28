import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Model } from 'mongoose';
import { SkillDocument, Skill } from './schemas/skill.schema';
export declare class SkillsService {
    private skillModel;
    constructor(skillModel: Model<SkillDocument>);
    create(createSkillDto: CreateSkillDto): Promise<Skill>;
    findAll(lang: any): Promise<Skill[]>;
    findOne(id: string): Promise<Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto): Promise<Skill>;
    remove(id: string): Promise<Skill>;
}
