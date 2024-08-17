//librerias principales
import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Req,
  Body,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

//Se importa el DTO, la entidad y los servicios de los libros
import { LibrosService } from './libros.service';
import { LibroDto } from './libro.dto';
import { Libro } from './libros.entity';

//Función para verificar el JWT
import { AuthGuard } from 'src/auth/guard/auth.guard';

//Controlador para manejar los libros
@Controller('libros')
export class LibrosController {
  constructor(private librosService: LibrosService) {} //constructor

  //Crear un nuevo libro
  @Post() //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  crearLibro(@Body() nuevoLibro: LibroDto): Promise<Libro> {
    return this.librosService.crearLibro(nuevoLibro); //llamado al servicio
  }

  //se obtienen todos los libros
  @Get() //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  obtenerTodos(@Req() request: Request): Promise<Libro[]> {
    return this.librosService.obtenerTodos(request.query); //llamado al servicio
  }

  //se obtiene un libro
  @Get(':libroId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  obtenerLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.obtenerLibro(libroId); //llamado al servicio
  }

  //se modifica un libro
  @Patch('/update/:libroId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  actualizarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.actualizarLibro(libroId, nuevoLibro); //llamado al servicio
  }

  //se activa un libro
  @Patch('/activate/:libroId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  activarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.activarLibro(libroId, nuevoLibro); //llamado al servicio
  }

  //se desactiva un libro
  @Delete('/desactivate/:libroId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  desactivarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.desactivarLibro(libroId, nuevoLibro); //llamado al servicio
  }

  //se elimina un libro
  @Delete(':libroId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  eliminarLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.eliminarLibro(libroId); //llamado al servicio
  }
}
