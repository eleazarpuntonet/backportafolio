import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { WorkDocument, Work } from './schemas/work.schema';
import { Model } from 'mongoose';


@Injectable()
export class WorkService {
  constructor (@Inject('WORK_MODEL') private worksModel: Model<WorkDocument>){}


  async create(createWorkDto: CreateWorkDto): Promise<Work> {
    const newWork = new this.worksModel(createWorkDto)
    return await newWork.save();
  }

  async findAll(lang): Promise<Work[]> {
    return await this.worksModel.find({lang}).exec()
  }

  async findOne(id: string) {
    const work =  this.worksModel.findById(id)

    if(!work){
      throw new NotFoundException(`El work ${id} no puede ser encontrado`)
    }

    return work
  }

  async update(id: string, updateWorkDto: UpdateWorkDto): Promise<Work> {
    const work = await this.worksModel.findByIdAndUpdate(id,updateWorkDto,{new:true})
    
    if(!work){
      throw new NotFoundException(`El work ${id} no puede ser encontrado`)
    }

    return work
  }

  async remove(id: string): Promise<Work> {
    return await this.worksModel.findByIdAndDelete(id)
  }
}
