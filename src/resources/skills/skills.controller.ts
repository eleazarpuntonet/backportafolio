import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
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


@Controller('skills')
export class SkillsController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly skillsService: SkillsService,
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
    @Body() createSkillDto: CreateSkillDto,
    @UploadedFile() image: Express.Multer.File
    ) {
      if(image){
        createSkillDto.image = `${this.SERVER_URL}${image.filename}` 
      } else {
        createSkillDto.image = `${this.SERVER_URL}404.jpg` 
      }
    return this.skillsService.create(createSkillDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(id);
  }

  // @UseGuards(JwtGuard)
  @Public()
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './src/public',
      filename: filenameRandom
    }),
  }))
  update(
    @Param('id') id: string, 
    @Body() updateSkillDto: UpdateSkillDto,
    @UploadedFile() image: Express.Multer.File
    ) {
    if(image){
      updateSkillDto.image = `${this.SERVER_URL}${image.filename}` 
    } else {
      updateSkillDto.image = updateSkillDto.image 
    }
    return this.skillsService.update(id, updateSkillDto);
  }

  // @UseGuards(JwtGuard)
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
