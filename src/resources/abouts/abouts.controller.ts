import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { Public } from 'src/auth/public.decorator';
import { AboutsService } from './abouts.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';

@Controller('abouts')
export class AboutsController {
  constructor(private readonly aboutsService: AboutsService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutsService.create(createAboutDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.aboutsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutsService.update(id, updateAboutDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.aboutsService.remove(id);
  }
}
