import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Public } from 'src/auth/public.decorator';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filenameRandom } from 'src/common/commons';
import { ConfigService } from '@nestjs/config';

@Controller('work')
export class WorkController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly workService: WorkService,
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
    @Body() createWorkDto: CreateWorkDto,
    @UploadedFile() image: Express.Multer.File) {
      if(image){
        createWorkDto.image = `${this.SERVER_URL}${image.filename}` 
      } else {
        createWorkDto.image = `${this.SERVER_URL}404.jpg` 
      }
    return this.workService.create(createWorkDto);
  }
  
  @Public()
  @Get()
  findAll() {
    return this.workService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workService.findOne(id);
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
    @Param('id') id: string, 
    @Body() updateWorkDto: UpdateWorkDto,
    @UploadedFile() image: Express.Multer.File
    ) {
      if(image){
        updateWorkDto.image = `${this.SERVER_URL}${image.filename}` 
      } else {
        updateWorkDto.image = updateWorkDto.image 
      }
    return this.workService.update(id, updateWorkDto);
  }

  // @UseGuards(JwtGuard)
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workService.remove(id);
  }
}
