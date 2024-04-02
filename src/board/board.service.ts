import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      name: 'Inez Dooley',
      content: 'Contents 1',
    },
    {
      id: 2,
      name: 'Mrs. Bob Brown',
      content: 'Contents 2',
    },
    {
      id: 3,
      name: 'Sheila White',
      content: 'Contents 3',
    },
    {
      id: 4,
      name: 'Mindy Ruecker',
      content: 'Contents 4',
    },
    {
      id: 5,
      name: 'Nelson Schowalter',
      content: 'Contents 5',
    },
    {
      id: 6,
      name: 'Debra Armstrong PhD',
      content: 'Contents 6',
    },
    {
      id: 7,
      name: 'Deanna Bailey',
      content: 'Contents 7',
    },
    {
      id: 8,
      name: 'Misty Connelly',
      content: 'Contents 8',
    },
    {
      id: 9,
      name: 'Kim Ruecker',
      content: 'Contents 9',
    },
    {
      id: 10,
      name: 'Sophia VonRueden',
      content: 'Contents 10',
    },
  ];

  findAll() {
    return this.boards;
  }

  find(id: number) {
    const index = this.getBoardId(id);
    return this.boards[index];
  }

  create(data) {
    const newBoard = { id: this.boards.length + 1, ...data };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, data) {
    const index = this.getBoardId(id);
    this.boards[index] = { ...this.boards[index], ...data };
    return this.boards[index];
  }

  delete(id: number) {
    const index = this.getBoardId(id);
    this.boards.splice(index, 1);
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }
} // Add this closing curly brace
