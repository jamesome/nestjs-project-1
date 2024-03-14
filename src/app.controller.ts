import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getId(@Param() id: number): string {
    return this.appService.getId(id['id']);
  }

  @Get('/req')
  getBye(@Req() request: Request): string {
    return this.appService.getBye(request);
  }
}
