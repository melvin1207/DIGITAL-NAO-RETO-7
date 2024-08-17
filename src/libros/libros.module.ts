//librerias principales
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//entidad, servicio y controladores de los libros
import { Libro } from './libros.entity';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';

//función principal
@Module({
  imports: [TypeOrmModule.forFeature([Libro])], //que se utilizara
  providers: [LibrosService], //acciones que se realizan
  controllers: [LibrosController], //verbos HTTP que se usan
})
export class LibrosModule {} //exportación para la app principal
