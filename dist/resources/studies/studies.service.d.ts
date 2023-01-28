import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { StudieDocument, Studie } from './schemas/studies.schema';
import { Model } from 'mongoose';
export declare class StudiesService {
    private studieModel;
    constructor(studieModel: Model<StudieDocument>);
    create(createStudyDto: CreateStudyDto): Promise<Studie>;
    findAll(lang: any): Promise<Studie[]>;
    findOne(id: string): Promise<Studie>;
    update(id: string, updateStudyDto: UpdateStudyDto): Promise<Studie>;
    remove(id: string): Promise<Studie>;
}
