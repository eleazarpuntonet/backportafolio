import { ClientService } from './client.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as path from 'path'

@Injectable()
export class ClientMiddleware implements NestMiddleware {
    constructor(private readonly clientService: ClientService) {}
    async use(req: Request, res: Response, next: () => void) {
      if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
        const file = this.getAssetPath(req.path);
        res.sendFile(file, (err,success) => {
        if (err) {
          res.status(err.status).end();
        }
      });
      } else {
        return next();
      }
    }

    getAssetPath(url: any) {
      const basePath = process.env.CLIENT_BUILD_PATH;
      return path.join(basePath, url);
    }
}
