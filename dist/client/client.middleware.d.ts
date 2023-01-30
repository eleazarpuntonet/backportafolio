import { ClientService } from './client.service';
import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class ClientMiddleware implements NestMiddleware {
    private readonly clientService;
    constructor(clientService: ClientService);
    use(req: Request, res: Response, next: () => void): Promise<void>;
    getAssetPath(url: any): string;
}
