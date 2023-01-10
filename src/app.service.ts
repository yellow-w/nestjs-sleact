import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly ConfigService: ConfigService){

  }

  getHello(): string {
    return this.ConfigService.get('DB_PASSWORD')
  }

}
