import { Controller, Post, UseGuards, Get, Req, Res,StreamableFile,Response,UseInterceptors, UploadedFile, Body } from '@nestjs/common';
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
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService        : AuthService,
    private readonly config: ConfigService,
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
        console.log(file)
        const url = await this.appService.uploadPublicFile(file.buffer,file.originalname)
        console.log(url)
      } catch {
        console.log('Algo fallo')
      }
    return 'retorno'
  }

  @Public()
  @Get('/resume-pdf')
  resumePdf(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), '/src/public/files/ELEAZAR_ORTEGA_ES_ABR2022.pdf'));
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="ELEAZAR_ORTEGA.pdf"',
    });
    return new StreamableFile(file);
  }
}
