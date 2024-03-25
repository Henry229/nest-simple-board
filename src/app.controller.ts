import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(): string {
    return 'Hello';
  }

  @Get('name/:name')
  getNameParam(@Param('name') name: string): string {
    return `${name} Hello`;
  }
}
