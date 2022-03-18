import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkexperiencesService } from './workexperiences.service';
import { CreateWorkexperienceDto } from './dto/create-workexperience.dto';
import { UpdateWorkexperienceDto } from './dto/update-workexperience.dto';

@Controller('workexperiences')
export class WorkexperiencesController {
  constructor(private readonly workexperiencesService: WorkexperiencesService) {}

  @Post()
  create(@Body() createWorkexperienceDto: CreateWorkexperienceDto) {
    return this.workexperiencesService.create(createWorkexperienceDto);
  }

  @Get()
  findAll() {
    return this.workexperiencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workexperiencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkexperienceDto: UpdateWorkexperienceDto) {
    return this.workexperiencesService.update(+id, updateWorkexperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workexperiencesService.remove(+id);
  }
}
