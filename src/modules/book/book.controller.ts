import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Prisma } from '@prisma/client';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: Prisma.BookCreateInput) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Prisma.BookCreateInput) {
    return this.bookService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
