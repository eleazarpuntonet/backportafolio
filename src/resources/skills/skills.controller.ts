import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, Req, Query } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Public } from 'src/auth/public.decorator';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filenameRandom } from 'src/common/commons';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AppService } from 'src/app.service';


@Controller('skills')
export class SkillsController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly skillsService: SkillsService,
    private readonly config: ConfigService,
    private readonly appService: AppService
  ) {
    this.SERVER_URL = this.config.get<string>('SERVER_URL')
  }

  @UseGuards(JwtGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() createSkillDto: CreateSkillDto,
    @Req() request: Request
    ) {
      const file = request.file
      if(file){
        createSkillDto.image = await this.appService.uploadPublicFile(file.buffer,file.originalname)
      } else {
        createSkillDto.image = `${this.SERVER_URL}404.jpg` 
      }
    return this.skillsService.create(createSkillDto);
  }

  @Public()
  @Get()
  findAll(
    @Query() params
  ) {
    return this.skillsService.findAll(params.lang);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string, 
    @Body() updateSkillDto: UpdateSkillDto,
    @Req() request: Request
    ) {
    const file = request.file
    if(file){
      updateSkillDto.image =  await this.appService.uploadPublicFile(file.buffer,file.originalname)
    } else {
      updateSkillDto.image = updateSkillDto.image 
    }
    return this.skillsService.update(id, updateSkillDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
