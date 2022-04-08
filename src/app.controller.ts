import { Controller, Post, UseGuards, Get, Req, Res,StreamableFile,Response } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

import { AppService } from './app.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/guards/localauth.guard';
import { AuthService } from './auth/auth/auth.service';
import { Public } from './auth/public.decorator';
import { User } from './resources/users/schemas/user.schema';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService        : AuthService
    ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req) {
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }

  @Public()
  @Get('/')
  redirect(@Res() res) {
    return res.redirect('/api');
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
