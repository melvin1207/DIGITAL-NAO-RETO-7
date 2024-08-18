//funciones basicas para el manejo de endpoints
import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

//Dto, Entity y los servicios para favoritos
import { FavoritosService } from './favoritos.service';
import { FavoritoDto } from './favoritos.dto';
import { Favorito } from './favoritos.entity';

//Función para verificar el JWT
import { AuthGuard } from 'src/auth/guard/auth.guard';

//se importa las librerias para la documentación
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

//Función principal
@ApiTags('favoritos') //tag de los favoritos
@Controller('favoritos')
@UseGuards(AuthGuard) // se protege con JWT
@ApiBearerAuth('acces-token') // metodo de autorizacion
export class FavoritosController {
  constructor(private favoritosService: FavoritosService) {} //Constructor

  //Función para crear un favorito
  @Post('/:libroId/:usuarioId')
  @ApiOperation({ summary: 'Se crea un favorito' }) //descripcion
  @ApiResponse({
    status: 201,
    description: 'Datos del favorito',
    type: FavoritoDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  crearFavorito(
    @Body() nuevoFavorito: FavoritoDto,
    @Param('libroId') libroId: string,
    @Param('usuarioId') usuarioId: string,
  ): Promise<Favorito> {
    return this.favoritosService.crearFavorito(
      nuevoFavorito,
      libroId,
      usuarioId,
    );
  }

  //función para obtener todos los favoritos de un usuario
  @Get('/todos/:usuarioId')
  @ApiOperation({ summary: 'Se obtienen todos los favoritos de un usuario' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos de los favoritos',
    type: FavoritoDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  obtenerTodos(@Param('usuarioId') usuarioId: string): Promise<Favorito[]> {
    return this.favoritosService.obtenerTodos(usuarioId);
  }

  //Función para obtener solo un favorito del usuario
  @Get('/:favoritoId')
  @ApiOperation({ summary: 'Se obtiene un favorito' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del favorito',
    type: FavoritoDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  obtenerFavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.obtenerFavorito(favoritoId);
  }

  //Función para obtener un favorito
  @Delete('/:favoritoId')
  @ApiOperation({ summary: 'Se elimina favorito' }) //descripcion
  @ApiResponse({
    status: 200,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  eliminarfavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.eliminarFavorito(favoritoId);
  }
}
