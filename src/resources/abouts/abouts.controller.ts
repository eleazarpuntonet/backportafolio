import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { Public } from 'src/auth/public.decorator';
import { AboutsService } from './abouts.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filenameRandom } from 'src/common/commons';
import { ConfigService } from '@nestjs/config';

@Controller('abouts')
export class AboutsController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly aboutsService: AboutsService,
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
      @Body() createAboutDto: CreateAboutDto,
      @UploadedFile() image: Express.Multer.File
    ) {
      if(image){
        createAboutDto.image = `${this.SERVER_URL}${image.filename}` 
      } else {
        createAboutDto.image = `${this.SERVER_URL}404.jpg` 
      }
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
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './src/public',
      filename: filenameRandom
    }),
  }))
  update(
    @Param('id') id: string, 
    @Body() updateAboutDto: UpdateAboutDto,
    @UploadedFile() image: Express.Multer.File
    ) {
      if(image){
        updateAboutDto.image = `${this.SERVER_URL}${image.filename}` 
      } else {
        updateAboutDto.image = updateAboutDto.image 
      }
    return this.aboutsService.update(id, updateAboutDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.aboutsService.remove(id);
  }
}
