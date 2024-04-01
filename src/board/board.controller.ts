import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.boardService.find(id);
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
