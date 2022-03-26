import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, StreamableFile } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { Public } from 'src/auth/public.decorator';
import { ElearningService } from './elearning.service';
import { CreateElearningDto } from './dto/create-elearning.dto';
import { UpdateElearningDto } from './dto/update-elearning.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { filenameRandom } from 'src/common/commons';
import { createReadStream } from 'fs';
import getBaseUrl from "get-base-url"
import { join } from 'path';
import { imagePathResolver } from '../../common/commons'
import { atob } from 'buffer';
import { AppService } from 'src/app.service';
@Controller('elearning')
export class ElearningController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly elearningService: ElearningService,
  ) {}

  // @UseGuards(JwtGuard)
  @Public()
  @Post()
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './src/public',
      filename: filenameRandom
    }),
  }))
  create(
    @Body() createElearningDto: CreateElearningDto,
    @UploadedFile() image: Express.Multer.File
    ) {
      createElearningDto.image = `${this.SERVER_URL}${image.filename}` 
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
