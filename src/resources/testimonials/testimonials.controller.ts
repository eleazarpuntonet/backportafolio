import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Public } from 'src/auth/public.decorator';
import { LocalAuthGuard } from 'src/auth/guards/localauth.guard';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filenameRandom } from 'src/common/commons';
import { ConfigService } from '@nestjs/config';


@Controller('testimonials')
export class TestimonialsController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly testimonialsService: TestimonialsService,
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
    @Body() createTestimonialDto: CreateTestimonialDto,
    @UploadedFile() image: Express.Multer.File
    ) {
      if(image){
        createTestimonialDto.image = `${this.SERVER_URL}${image.filename}` 
      } else {
        createTestimonialDto.image = `${this.SERVER_URL}404.jpg` 
      }
    return this.testimonialsService.create(createTestimonialDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.testimonialsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testimonialsService.findOne(id);
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
    @Body() updateTestimonialDto: UpdateTestimonialDto,
    @UploadedFile() image: Express.Multer.File) {
    if(image){
      updateTestimonialDto.image = `${this.SERVER_URL}${image.filename}` 
    } else {
      updateTestimonialDto.image = updateTestimonialDto.image 
    }
    return this.testimonialsService.update(id, updateTestimonialDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testimonialsService.remove(id);
  }
}
