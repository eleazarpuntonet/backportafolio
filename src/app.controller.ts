import { Controller, Post, UseGuards, Get, Req, Res,StreamableFile,Response,UseInterceptors, UploadedFile, Body, Inject } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/guards/localauth.guard';
import { AuthService } from './auth/auth/auth.service';
import { Public } from './auth/public.decorator';
import { User } from './resources/users/schemas/user.schema';
import { ConfigService } from '@nestjs/config';
import { JwtGuard } from './auth/guards/jwt.guard';
import { filenameRandom } from './common/commons';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { SkillSchema } from './resources/skills/schemas/skill.schema';
import { WorkSchema } from './resources/work/schemas/work.schema';
import { WorkExperienceSchema } from './resources/workexperiences/schemas/workexperience.schema';
import { AboutSchema } from './resources/abouts/schemas/about.schema';
import { StudieSchema } from './resources/studies/schemas/studies.schema';
import { ElearningSchema } from './resources/elearning/schemas/elearning.schema';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService        : AuthService,
    private readonly config: ConfigService,
    @Inject('DATABASE_CONNECTION') private connection: Connection
    ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req) {
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }

  @Public()
  @Post('/test')
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() bodyTested: any,
    @UploadedFile() image: Express.Multer.File,
    @Req() request: Request
    ) {
      try{
        const file = request.file
        const url = await this.appService.uploadPublicFile(file.buffer,file.originalname)
      } catch {
        console.log('Algo fallo')
      }
    return 'retorno'
  }

  @Public()
  @Get('/resume-pdf-es')
  resumePdf(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), '/src/public/files/ELEAZAR_ORTEGA_ES_ABR2022.pdf'));
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="ELEAZAR_ORTEGA.pdf"',
    });
    return new StreamableFile(file);
  }

  @Public()
  @Get('/resume-pdf-en')
  resumePdfEN(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), '/src/public/files/ELEAZAR_ORTEGA_EN_ABR2022.pdf'));
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="ELEAZAR_ORTEGA.pdf"',
    });
    return new StreamableFile(file);
  }


  // @Public()
  // @Get('/test')
  // async test() {
  //   var model = await this.connection.model('e_learning',ElearningSchema)
  //   await model.updateMany({},{ $set: { lang: 'es' } }).exec()

  //   model = await this.connection.model('abouts',AboutSchema)
  //   await  model.updateMany({},{ $set: { lang: 'es' } }).exec()

  //   model = await this.connection.model('skills',SkillSchema)
  //   await model.updateMany({},{ $set: { lang: 'es' } }).exec()

  //   model = await this.connection.model('studies',StudieSchema)
  //   await model.updateMany({},{ $set: { lang: 'es' } }).exec()
    
  //   let modelo = await this.connection.model('work_experiences',WorkExperienceSchema)
  //   await modelo.updateMany({},{ $set: { lang: 'es' } }).exec()
    
  //   model = await this.connection.model('works',WorkSchema)
  //   return await  model.updateMany({},{ $set: { lang: 'es' } }).exec()
    
  // }


  @Public()
  @Get('/')
  redirect(@Res() res) {
    return res.redirect('/api');
  }
}
