import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutsService } from './abouts.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';

@Controller('abouts')
export class AboutsController {
  constructor(private readonly aboutsService: AboutsService) {}

  @Post()
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutsService.create(createAboutDto);
  }

  @Get()
  findAll() {
    return this.aboutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutsService.update(+id, updateAboutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutsService.remove(+id);
  }
}
