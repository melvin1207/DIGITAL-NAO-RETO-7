import { Module } from '@nestjs/common';
import { Libro } from './libros.entity';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  providers: [LibrosService],
  controllers: [LibrosController],
})
export class LibrosModule {}
