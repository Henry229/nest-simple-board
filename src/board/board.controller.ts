import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('board')
export class BoardController {
  @Get()
  findAll() {
    return 'This action returns all board';
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return `This action returns a #${id} board`;
  }

  @Post()
  create(@Body() data) {
    return 'This action adds a new board';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return 'This action updates a board';
  }

  @Delete(':id')
  remove() {
    return 'This action removes a board';
  }
}
