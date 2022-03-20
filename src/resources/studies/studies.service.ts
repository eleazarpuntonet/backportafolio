import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { StudieDocument, Studie } from './schemas/studies.schema';
import { Model } from 'mongoose'

@Injectable()
export class StudiesService {

  constructor (@Inject('STUDIES_MODEL') private studieModel: Model<StudieDocument>){}


  async create(createStudyDto: CreateStudyDto): Promise<Studie> {
    const newskill = new this.studieModel(createStudyDto)
    return await newskill.save()
  }

  async findAll(): Promise<Studie[]> {
    return this.studieModel.find().exec()
  }

  async findOne(id: string): Promise<Studie> {
    const about = await this.studieModel.findById(id)

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async update(id: string, updateStudyDto: UpdateStudyDto): Promise<Studie> {
    const about = await this.studieModel.findByIdAndUpdate(id, updateStudyDto, {new:true})

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async remove(id: string): Promise<Studie> {
    return await this.studieModel.findByIdAndDelete(id)
  }
}
