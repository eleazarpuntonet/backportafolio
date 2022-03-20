import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { Public } from 'src/auth/public.decorator';
import { ElearningService } from './elearning.service';
import { CreateElearningDto } from './dto/create-elearning.dto';
import { UpdateElearningDto } from './dto/update-elearning.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('elearning')
export class ElearningController {
  constructor(private readonly elearningService: ElearningService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createElearningDto: CreateElearningDto) {
    return this.elearningService.create(createElearningDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.elearningService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elearningService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElearningDto: UpdateElearningDto) {
    return this.elearningService.update(id, updateElearningDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elearningService.remove(id);
  }
}
