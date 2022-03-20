import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { StudiesService } from './studies.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Public } from 'src/auth/public.decorator';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('studies')
export class StudiesController {
  constructor(private readonly studiesService: StudiesService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createStudyDto: CreateStudyDto) {
    return this.studiesService.create(createStudyDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.studiesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studiesService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudyDto: UpdateStudyDto) {
    return this.studiesService.update(id, updateStudyDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studiesService.remove(id);
  }
}
