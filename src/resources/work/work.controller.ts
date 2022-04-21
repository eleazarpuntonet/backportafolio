import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, Req, Query } from '@nestjs/common';
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
import { Request } from 'express';
import { AppService } from 'src/app.service';

@Controller('work')
export class WorkController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly workService: WorkService,
    private readonly appService: AppService,
    private readonly config: ConfigService
    ) {
    this.SERVER_URL = this.config.get<string>('SERVER_URL')
  }

  @UseGuards(JwtGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() createWorkDto: CreateWorkDto,
    @Req() request: Request
    ) {
      const file = request.file
      if(file){
        createWorkDto.image = await this.appService.uploadPublicFile(file.buffer,file.originalname)
      } else {
        createWorkDto.image = `${this.SERVER_URL}404.jpg` 
      }
    return this.workService.create(createWorkDto);
  }
  
  @Public()
  @Get()
  findAll(
    @Query() params
  ) {
    return this.workService.findAll(params.lang);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateWorkDto: UpdateWorkDto,
    @Req() request: Request
    ) {
      const file = request.file
      if(file){
        updateWorkDto.image = await this.appService.uploadPublicFile(file.buffer,file.originalname)
      } else {
        updateWorkDto.image = updateWorkDto.image 
      }
    return this.workService.update(id, updateWorkDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workService.remove(id);
  }
}
