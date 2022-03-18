import { Injectable } from '@nestjs/common';
import { CreateElearningDto } from './dto/create-elearning.dto';
import { UpdateElearningDto } from './dto/update-elearning.dto';

@Injectable()
export class ElearningService {
  create(createElearningDto: CreateElearningDto) {
    return 'This action adds a new elearning';
  }

  findAll() {
    return `This action returns all elearning`;
  }

  findOne(id: number) {
    return `This action returns a #${id} elearning`;
  }

  update(id: number, updateElearningDto: UpdateElearningDto) {
    return `This action updates a #${id} elearning`;
  }

  remove(id: number) {
    return `This action removes a #${id} elearning`;
  }
}
