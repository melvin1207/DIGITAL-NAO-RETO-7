import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Req,
  Body,
} from '@nestjs/common';

import { LibrosService } from './libros.service';
import { Request } from 'express';
import { LibroDto } from './libro.dto';
import { Libro } from './libros.entity';

@Controller('libros')
export class LibrosController {
  constructor(private librosService: LibrosService) {}

  @Post()
  crearLibro(@Body() nuevoLibro: LibroDto): Promise<Libro> {
    return this.librosService.crearLibro(nuevoLibro);
  }

  @Get()
  obtenerTodos(@Req() request: Request): Promise<Libro[]> {
    return this.librosService.obtenerTodos(request.query);
  }

  @Get(':libroId')
  obtenerLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.obtenerLibro(libroId);
  }

  @Patch('/update/:libroId')
  actualizarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.actualizarLibro(libroId, nuevoLibro);
  }

  @Patch('/activate/:libroId')
  activarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.activarLibro(libroId, nuevoLibro);
  }

  @Delete('/desactivate/:libroId')
  desactivarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.desactivarLibro(libroId, nuevoLibro);
  }

  @Delete(':libroId')
  eliminarLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.eliminarLibro(libroId);
  }
}
