import { Controller, Post, UseGuards, Get, Req } from '@nestjs/common';
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
  @Get('/public')
  findOne() {

  }
}
