import { ClientService } from './client.service';
import { Controller, Get, Header, Res } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { Response } from 'express';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    @Get('*')
    @Header('Content-Type', 'text/html')
    @Public()
    public async get() {
      return this.clientService.getApp();
    }
}
