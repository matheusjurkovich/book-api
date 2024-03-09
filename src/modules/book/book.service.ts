import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {} //faz a conexao com o banco

  async create(data: Prisma.BookCreateInput) {
    //funcao para criar os livros

    return this.prisma.book.create({
      //cria os livros
      data,
    });
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async update(id: string, data: Prisma.BookCreateInput) {
    const bookExists = await this.prisma.book.findUnique({
      //aqui ele procura por objeto unico
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Book does not exists!'); //verifica se o livre existe
    }

    return await this.prisma.book.update({
      //se existe ele muda os dados passados pelo body onde o id e o solicitado
      //exemplo: localhost:3000/book/3fcee77a-7458-4448-8074-370500f6b2f8
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    //procura o id
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      //ve se o id existe
      throw new Error('Book does not exists!');
    }
    return await this.prisma.book.delete({
      //se existe ele deleta os dados pelo id passado
      //exemplo: localhost:3000/book/3fcee77a-7458-4448-8074-370500f6b2f8
      where: {
        id,
      },
    });
  }
}
