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

//se importa las librerias para la documentación
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

//Función para verificar el JWT
import { AuthGuard } from 'src/auth/guard/auth.guard';

//Controlador para manejar los libros
@ApiTags('libros') //tag de los libros
@Controller('libros')
@UseGuards(AuthGuard) // se protege con JWT
@ApiBearerAuth('access-token') // metodo de autorizacion
export class LibrosController {
  constructor(private librosService: LibrosService) {} //constructor

  //Crear un nuevo libro
  @Post() //ruta que usa
  @ApiOperation({ summary: 'Obtiene datos de libro' }) //descripcion
  @ApiResponse({
    status: 201,
    description: 'Datos del libro',
    type: LibroDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  crearLibro(@Body() nuevoLibro: LibroDto): Promise<Libro> {
    return this.librosService.crearLibro(nuevoLibro); //llamado al servicio
  }

  //se obtienen todos los libros
  @Get() //ruta que usa
  @ApiOperation({ summary: 'Obtiene todos los libros' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos de los libro',
    type: LibroDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  obtenerTodos(@Req() request: Request): Promise<Libro[]> {
    return this.librosService.obtenerTodos(request.query); //llamado al servicio
  }

  //se obtiene un libro
  @Get(':libroId') //ruta que usa
  @ApiOperation({ summary: 'Obtiene un libro' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del libro',
    type: LibroDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  obtenerLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.obtenerLibro(libroId); //llamado al servicio
  }

  //se modifica un libro
  @Patch('/update/:libroId') //ruta que usa
  @ApiOperation({ summary: 'Modifica un libro' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del libro',
    type: LibroDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  actualizarLibro(
    @Param('libroId') libroId: string,
    @Body() nuevoLibro: LibroDto,
  ): Promise<Libro> {
    return this.librosService.actualizarLibro(libroId, nuevoLibro); //llamado al servicio
  }

  //se activa un libro
  @Patch('/activate/:libroId') //ruta que usa
  @ApiOperation({ summary: 'Ativa un libro' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del libro',
    type: LibroDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  activarLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.activarLibro(libroId); //llamado al servicio
  }

  //se desactiva un libro
  @Delete('/desactivate/:libroId') //ruta que usa
  @ApiOperation({ summary: 'Desativa un libro' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del libro',
    type: LibroDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  desactivarLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.desactivarLibro(libroId); //llamado al servicio
  }

  //se elimina un libro
  @Delete(':libroId') //ruta que usa
  @ApiOperation({ summary: 'Elimina un libro' }) //descripcion
  @ApiResponse({
    status: 200,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  eliminarLibro(@Param('libroId') libroId: string): Promise<Libro> {
    return this.librosService.eliminarLibro(libroId); //llamado al servicio
  }
}
