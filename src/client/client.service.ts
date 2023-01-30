import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';

@Injectable()
export class ClientService {
    private readonly logger = new Logger(ClientService.name);
    public async getApp() {
        const basePath = process.env.CLIENT_BUILD_PATH;
        const filePath = path.resolve(path.join(basePath, 'index.html'));

        return new Promise((resolve, reject) => {
          fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException, data: string) => {
            if (err) {
              this.logger.error(data)
              reject(err);
            } else {
              this.logger.log(data)
              resolve(data);
            }
          });
        });
      }
    
}
