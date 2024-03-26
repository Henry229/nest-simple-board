import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('name')
  // getName(): string {
  //   return 'Hello How are you!!';
  // }

  @Get('name/:name')
  getNameParam(@Param('name') name: string): string {
    return `${name} Hello`;
  }

  @Get('name')
  getNameQuery(@Query('name') name: string): string {
    return `Go ${name}`;
  }
}
