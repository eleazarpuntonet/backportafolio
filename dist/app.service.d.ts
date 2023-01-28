/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
export declare class AppService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadPublicFile(Body: Buffer, filename: string): Promise<any>;
}
