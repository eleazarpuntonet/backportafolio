import { CreateElearningDto } from './dto/create-elearning.dto';
import { UpdateElearningDto } from './dto/update-elearning.dto';
import { Elearning, ElearningDocument } from './schemas/elearning.schema';
import { Model } from 'mongoose';
export declare class ElearningService {
    private learningModel;
    constructor(learningModel: Model<ElearningDocument>);
    create(createElearningDto: CreateElearningDto): Promise<Elearning>;
    findAll(lang: any): Promise<Elearning[]>;
    findOne(id: string): Promise<ElearningDocument>;
    update(id: string, updateElearningDto: UpdateElearningDto): Promise<Elearning>;
    remove(id: string): Promise<Elearning>;
}
