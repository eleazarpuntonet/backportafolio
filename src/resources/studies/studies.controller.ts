import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards,UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { StudiesService } from './studies.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { Public } from 'src/auth/public.decorator';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filenameRandom } from 'src/common/commons';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AppService } from 'src/app.service';


@Controller('studies')
export class StudiesController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly studiesService: StudiesService,
    private readonly appService: AppService,
    private readonly config: ConfigService
    ) {
      this.SERVER_URL = this.config.get<string>('SERVER_URL')
    }

  @UseGuards(JwtGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
      @Body() createStudyDto: CreateStudyDto,
      @Req() request: Request
    ) {
    const file = request.file
      if(file){
      createStudyDto.image =  await this.appService.uploadPublicFile(file.buffer,file.originalname)
    } else {
      createStudyDto.image = `${this.SERVER_URL}404.jpg` 
    }
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
  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  async update(
    @Param('id') id: string, @Body() updateStudyDto: UpdateStudyDto,
      @Req() request: Request
      ) {
    const file = request.file
    if(file){
      updateStudyDto.image = await this.appService.uploadPublicFile(file.buffer,file.originalname)
    } else {
      updateStudyDto.image = updateStudyDto.image 
    }
    return this.studiesService.update(id, updateStudyDto);
  }


  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studiesService.remove(id);
  }
}
