import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile, Req, Query } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Public } from 'src/auth/public.decorator';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { AppService } from 'src/app.service';
import { Request } from 'express';

@Controller('testimonials')
export class TestimonialsController {
  public SERVER_URL:  string  =  "http://localhost:3000/"

  constructor(
    private readonly testimonialsService: TestimonialsService,
    private readonly config: ConfigService,
    private readonly appService: AppService
  ) {
    this.SERVER_URL = this.config.get<string>('SERVER_URL')
  }

  @Public()
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() createTestimonialDto: CreateTestimonialDto,
    @Req() request: Request
    ) {
      const file = request.file
      if(file){
        createTestimonialDto.image = await this.appService.uploadPublicFile(file.buffer,file.originalname)
      } else {
        createTestimonialDto.image = `${this.SERVER_URL}404.jpg` 
      }
    return this.testimonialsService.create(createTestimonialDto);
  }

  @Public()
  @Get()
  findAll(
  ) {
    return this.testimonialsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testimonialsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string, 
    @Body() updateTestimonialDto: UpdateTestimonialDto,
    @UploadedFile() image: Express.Multer.File,
    @Req() request: Request
    ) {
    const file = request.file
    if(file){
      updateTestimonialDto.image = await this.appService.uploadPublicFile(file.buffer,file.originalname)
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
