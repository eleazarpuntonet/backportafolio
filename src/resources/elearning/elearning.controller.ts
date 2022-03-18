import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElearningService } from './elearning.service';
import { CreateElearningDto } from './dto/create-elearning.dto';
import { UpdateElearningDto } from './dto/update-elearning.dto';

@Controller('elearning')
export class ElearningController {
  constructor(private readonly elearningService: ElearningService) {}

  @Post()
  create(@Body() createElearningDto: CreateElearningDto) {
    return this.elearningService.create(createElearningDto);
  }

  @Get()
  findAll() {
    return this.elearningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elearningService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElearningDto: UpdateElearningDto) {
    return this.elearningService.update(+id, updateElearningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elearningService.remove(+id);
  }
}
