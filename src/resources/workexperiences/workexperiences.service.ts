import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateWorkexperienceDto } from './dto/create-workexperience.dto';
import { UpdateWorkexperienceDto } from './dto/update-workexperience.dto';
import { WorkExperience, WorkExperienceDocument } from './schemas/workexperience.schema';
import { Model } from 'mongoose'

@Injectable()
export class WorkexperiencesService {
  constructor (@Inject('WORKEXPERIENCE_MODEL') private worksModel: Model<WorkExperienceDocument>){}


  async create(createWorkexperienceDto: CreateWorkexperienceDto) {
    const newWork = new this.worksModel(createWorkexperienceDto)
    return await newWork.save();
  }

  async findAll(lang): Promise<WorkExperience[]> {
    return await this.worksModel.find({lang}).exec()
  }

  async findOne(id: string): Promise<WorkExperience> {
    const work =  this.worksModel.findById(id)

    if(!work){
      throw new NotFoundException(`El work ${id} no puede ser encontrado`)
    }

    return work
  }

  async update(id: string, updateWorkDto: UpdateWorkexperienceDto): Promise<WorkExperience> {
    const work = await this.worksModel.findByIdAndUpdate(id,updateWorkDto,{new:true})
    
    if(!work){
      throw new NotFoundException(`El work ${id} no puede ser encontrado`)
    }

    return work
  }

  async remove(id: string): Promise<WorkExperience> {
    return await this.worksModel.findByIdAndDelete(id)
  }
}
