import { Injectable,Inject,NotFoundException } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Model } from 'mongoose'
import { SkillDocument, Skill } from './schemas/skill.schema';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@Injectable()
export class SkillsService {
  constructor (
    @Inject('SKILLS_MODEL') private skillModel: Model<SkillDocument>
  ){}


  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const newAbout = new this.skillModel(createSkillDto)
    return await newAbout.save()
  }

  async findAll(lang): Promise<Skill[]> {
    return this.skillModel.find({lang}).exec()
  }

  async findOne(id: string): Promise<Skill> {
    const about = await this.skillModel.findById(id)

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async update(id: string, updateSkillDto: UpdateSkillDto): Promise<Skill> {
    const about = await this.skillModel.findByIdAndUpdate(id, updateSkillDto, {new:true})

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async remove(id: string): Promise<Skill> {
    return await this.skillModel.findByIdAndDelete(id)
  }
}
