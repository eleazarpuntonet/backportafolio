import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { Model } from 'mongoose';
import { AboutDocument, About } from './schemas/about.schema';
export declare class AboutsService {
    private aboutModel;
    constructor(aboutModel: Model<AboutDocument>);
    create(createAboutDto: CreateAboutDto): Promise<About>;
    findAll(lang: any): Promise<About[]>;
    findOne(id: string): Promise<About>;
    update(id: string, updateAboutDto: UpdateAboutDto): Promise<About>;
    remove(id: string): Promise<About>;
}
