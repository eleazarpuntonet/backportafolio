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
import { join } from 'path';
@Controller('elearning')
export class ElearningController {
  public SERVER_URL: string  =  "http://localhost:3000/"

  constructor(
    private readonly elearningService: ElearningService
  ) {}

  @UseGuards(JwtGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './files',
      filename: filenameRandom
    }),
  }))
  create(
    @Body() createElearningDto: CreateElearningDto,
    @UploadedFile() image: Express.Multer.File
    ) {
      // let pre = join(process.cwd())
      // let post = image.path
      // let mayb = pre+post
      const stream = createReadStream(join(process.cwd(), image.path));
      let path = new StreamableFile(stream)
      // createElearningDto.image = path 
      createElearningDto.image = stream.path
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
