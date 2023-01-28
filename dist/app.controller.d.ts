/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AuthService } from './auth/auth/auth.service';
import { User } from './resources/users/schemas/user.schema';
import { ConfigService } from '@nestjs/config';
import { Connection } from 'mongoose';
export declare class AppController {
    private readonly appService;
    private authService;
    private readonly config;
    private connection;
    constructor(appService: AppService, authService: AuthService, config: ConfigService, connection: Connection);
    login(req: any): Promise<{
        access_token: string;
        user: User;
    }>;
    create(bodyTested: any, image: Express.Multer.File, request: Request): Promise<string>;
    resumePdf(res: any): StreamableFile;
    resumePdfEN(res: any): StreamableFile;
    redirect(res: any): any;
}
