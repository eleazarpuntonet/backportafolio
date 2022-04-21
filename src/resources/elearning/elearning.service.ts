import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import { CreateElearningDto } from './dto/create-elearning.dto';
import { UpdateElearningDto } from './dto/update-elearning.dto';
import { Elearning, ElearningDocument } from './schemas/elearning.schema';
import { Model } from 'mongoose'

@Injectable()
export class ElearningService {
  constructor (@Inject('ELEARNING_MODEL') private learningModel: Model<ElearningDocument>){}

  async create(createElearningDto: CreateElearningDto): Promise<Elearning> {
    const newELearning = new this.learningModel(createElearningDto)
    return await newELearning.save()
  }

  async findAll(lang): Promise<Elearning[]> {
    return await this.learningModel.find({lang}).exec()
  }

  async findOne(id: string): Promise<ElearningDocument> {
    const about = await this.learningModel.findById(id)

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async update(id: string, updateElearningDto: UpdateElearningDto): Promise<Elearning> {
    const about = await this.learningModel.findByIdAndUpdate(id, updateElearningDto, {new:true})

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async remove(id: string): Promise<Elearning> {
    return await this.learningModel.findByIdAndDelete(id)
  }
}
