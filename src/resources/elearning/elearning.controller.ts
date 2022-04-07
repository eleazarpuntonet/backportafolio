import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, StreamableFile } from '@nestjs/common';
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
@Controller('elearning')
export class ElearningController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly elearningService: ElearningService,
    private readonly config: ConfigService
  ) {
    this.SERVER_URL = this.config.get<string>('SERVER_URL')
  }

  @UseGuards(JwtGuard)
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
      if(image){
        createElearningDto.image = `${this.SERVER_URL}${image.filename}` 
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
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './src/public',
      filename: filenameRandom
    }),
  }))
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateElearningDto: UpdateElearningDto,
    @UploadedFile() image: Express.Multer.File
  ) {
    if(image){
      updateElearningDto.image = `${this.SERVER_URL}${image.filename}` 
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
