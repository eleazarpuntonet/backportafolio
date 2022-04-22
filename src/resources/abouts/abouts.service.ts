import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { Model } from 'mongoose'
import { AboutDocument,About } from './schemas/about.schema';
import { Public } from 'src/auth/public.decorator';

@Injectable()
export class AboutsService {
  constructor (@Inject('ABOUT_MODEL') private aboutModel: Model<AboutDocument>){}


  async create(createAboutDto: CreateAboutDto): Promise<About> {
    const newAbout = new this.aboutModel(createAboutDto)
    return await newAbout.save()
  }

  async findAll(lang): Promise<About[]> {
    return this.aboutModel.find(lang ? {lang}: null).exec()
  }

  async findOne(id: string): Promise<About> {
    const about = await this.aboutModel.findById(id)

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async update(id: string, updateAboutDto: UpdateAboutDto): Promise<About> {
    const about = await this.aboutModel.findByIdAndUpdate(id, updateAboutDto, {new:true})

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async remove(id: string): Promise<About> {
    return await this.aboutModel.findByIdAndDelete(id)
  }
}
