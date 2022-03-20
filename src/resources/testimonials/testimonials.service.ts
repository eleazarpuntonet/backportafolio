import { Injectable,Inject,NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { TestimonialDocument, Testimonial } from './schemas/testimonial.schema';

@Injectable()
export class TestimonialsService {
  constructor (@Inject('TESTIMONIAL_MODEL') private testimonialModel: Model<TestimonialDocument>){}


  async create(createTestimonialDto: CreateTestimonialDto): Promise<Testimonial> {
    const newAbout = new this.testimonialModel(createTestimonialDto)
    return await newAbout.save()
  }

  async findAll(): Promise<Testimonial[]> {
    return this.testimonialModel.find().exec()
  }

  async findOne(id: string): Promise<Testimonial> {
    const about = await this.testimonialModel.findById(id)

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async update(id: string, updateTestimonialDto: UpdateTestimonialDto): Promise<Testimonial> {
    const about = await this.testimonialModel.findByIdAndUpdate(id, updateTestimonialDto, {new:true})

    if(!about){
      throw new NotFoundException(`El about ${id} no puede ser encontrado`)
    }

    return about
  }

  async remove(id: string): Promise<Testimonial> {
    return await this.testimonialModel.findByIdAndDelete(id)
  }
}
