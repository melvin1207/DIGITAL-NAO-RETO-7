import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {
  constructor(private librosService: LibrosService) {}

  @Post()
  crearLibro() {
    return this.librosService.crearLibro();
  }

  @Get()
  obtenerTodos() {
    return this.librosService.obtenerTodos();
  }

  @Get()
  obtenerLibro() {
    return this.librosService.obtenerLibro();
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
