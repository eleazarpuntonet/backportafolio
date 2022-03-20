import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { WorkexperiencesService } from './workexperiences.service';
import { CreateWorkexperienceDto } from './dto/create-workexperience.dto';
import { UpdateWorkexperienceDto } from './dto/update-workexperience.dto';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { Public } from 'src/auth/public.decorator';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('workexperiences')
export class WorkexperiencesController {
  constructor(private readonly workexperiencesService: WorkexperiencesService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createWorkexperienceDto: CreateWorkexperienceDto) {
    return this.workexperiencesService.create(createWorkexperienceDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.workexperiencesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workexperiencesService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkexperienceDto: UpdateWorkexperienceDto) {
    return this.workexperiencesService.update(id, updateWorkexperienceDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workexperiencesService.remove(id);
  }
}
