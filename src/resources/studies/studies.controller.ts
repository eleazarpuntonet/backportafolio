import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards,UseInterceptors, UploadedFile } from '@nestjs/common';
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


@Controller('studies')
export class StudiesController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly studiesService: StudiesService,
    private readonly config: ConfigService
    ) {
      this.SERVER_URL = this.config.get<string>('SERVER_URL')
    }

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
      @Body() createStudyDto: CreateStudyDto,
      @UploadedFile() image: Express.Multer.File
    ) {
    if(image){
      createStudyDto.image = `${this.SERVER_URL}${image.filename}` 
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


  // @UseGuards(JwtGuard)
  @Public()
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './src/public',
      filename: filenameRandom
    }),
  }))
  @Patch(':id')
  update(
    @Param('id') id: string, @Body() updateStudyDto: UpdateStudyDto,
    @UploadedFile() image: Express.Multer.File
    ) {
    if(image){
      updateStudyDto.image = `${this.SERVER_URL}${image.filename}` 
    } else {
      updateStudyDto.image = updateStudyDto.image 
    }
    return this.studiesService.update(id, updateStudyDto);
  }


  @Public()
  // @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studiesService.remove(id);
  }
}
