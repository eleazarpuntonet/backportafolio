import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public SERVER_URL:  string  =  "http://localhost:3000/"
  constructor(){
  }
  getHello(): string {
    return 'Hello World!';
  }
}
