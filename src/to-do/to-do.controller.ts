import { Controller, Get, Post } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('to-do')
@ApiTags('To-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Get()
  async getTodo() {}

  @Get()
  async getTodayTodo() {}

  @Post()
  async createTodo() {}
}
