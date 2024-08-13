import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Req,
} from '@nestjs/common';

import { LibrosService } from './libros.service';
import { Request } from 'express';

@Controller('libros')
export class LibrosController {
  constructor(private librosService: LibrosService) {}

  @Post()
  crearLibro() {
    return this.librosService.crearLibro();
  }

  @Get()
  obtenerTodos(@Req() request: Request) {
    return this.librosService.obtenerTodos(request.query);
  }

  @Get(':libroId')
  obtenerLibro(@Param('libroId') libroId: string) {
    return this.librosService.obtenerLibro(libroId);
  }

  @Patch()
  actualizarLibro() {
    return this.librosService.actualizarLibro();
  }

  @Patch()
  activarLibro() {
    return this.librosService.activarLibro();
  }

  @Delete()
  desactivarLibro() {
    return this.librosService.desactivarLibro();
  }

  @Delete()
  eliminarLibro() {
    return this.librosService.eliminarLibro();
  }
}
