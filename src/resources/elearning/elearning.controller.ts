import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, StreamableFile, Req } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { Public } from 'src/auth/public.decorator';
import { ElearningService } from './elearning.service';
import { CreateElearningDto } from './dto/create-elearning.dto';
import { UpdateElearningDto } from './dto/update-elearning.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filenameRandom } from 'src/common/commons';
import { ConfigService } from '@nestjs/config';
import { AppService } from 'src/app.service';
import { Request } from 'express';
@Controller('elearning')
export class ElearningController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly elearningService: ElearningService,
    private readonly config: ConfigService,
    private readonly appService: AppService
  ) {
    this.SERVER_URL = this.config.get<string>('SERVER_URL')
  }

  @UseGuards(JwtGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() createElearningDto: CreateElearningDto,
    @Req() request: Request
    ) {
      const file = request.file
      if(file){
        createElearningDto.image = await this.appService.uploadPublicFile(file.buffer,file.originalname)
      } else {
        createElearningDto.image = `${this.SERVER_URL}404.jpg` 
      }
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
  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateElearningDto: UpdateElearningDto,
    @Req() request: Request
    ) {
      const file = request.file
      if(file){
      updateElearningDto.image = await this.appService.uploadPublicFile(file.buffer,file.originalname)
    } else {
      updateElearningDto.image = updateElearningDto.image 
    }

    return this.elearningService.update(id, updateElearningDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elearningService.remove(id);
  }
}
