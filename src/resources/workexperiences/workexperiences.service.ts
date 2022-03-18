import { Injectable } from '@nestjs/common';
import { CreateWorkexperienceDto } from './dto/create-workexperience.dto';
import { UpdateWorkexperienceDto } from './dto/update-workexperience.dto';

@Injectable()
export class WorkexperiencesService {
  create(createWorkexperienceDto: CreateWorkexperienceDto) {
    return 'This action adds a new workexperience';
  }

  findAll() {
    return `This action returns all workexperiences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workexperience`;
  }

  update(id: number, updateWorkexperienceDto: UpdateWorkexperienceDto) {
    return `This action updates a #${id} workexperience`;
  }

  remove(id: number) {
    return `This action removes a #${id} workexperience`;
  }
}
