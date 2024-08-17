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

import { LibrosService } from './libros.service';
import { Request } from 'express';
import { LibroDto } from './libro.dto';
import { Libro } from './libros.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('libros')
export class LibrosController {
  constructor(private librosService: LibrosService) {}

  @Post()
  @UseGuards(AuthGuard)
  crearLibro(@Body() nuevoLibro: LibroDto): Promise<Libro> {
    return this.librosService.crearLibro(nuevoLibro);
  }

  @Get()
  @UseGuards(AuthGuard)
  obtenerTodos(@Req() request: Request): Promise<Libro[]> {
    return this.librosService.obtenerTodos(request.query);
  }

  @Get(':libroId')
  @UseGuards(AuthGuard)
  obtenerLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.obtenerLibro(libroId);
  }

  @Patch('/update/:libroId')
  @UseGuards(AuthGuard)
  actualizarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.actualizarLibro(libroId, nuevoLibro);
  }

  @Patch('/activate/:libroId')
  @UseGuards(AuthGuard)
  activarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.activarLibro(libroId, nuevoLibro);
  }

  @Delete('/desactivate/:libroId')
  @UseGuards(AuthGuard)
  desactivarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.desactivarLibro(libroId, nuevoLibro);
  }

  @Delete(':libroId')
  @UseGuards(AuthGuard)
  eliminarLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.eliminarLibro(libroId);
  }
}
