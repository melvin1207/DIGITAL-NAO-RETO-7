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

//Función principal
@Controller('favoritos')
export class FavoritosController {
  constructor(private favoritosService: FavoritosService) {} //Constructor

  //Función para crear un favorito
  @Post('/:libroId/:usuarioId')
  @UseGuards(AuthGuard) //Protección con JWT
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
  @UseGuards(AuthGuard) //Protección con JWT
  obtenerTodos(@Param('usuarioId') usuarioId: string): Promise<Favorito[]> {
    return this.favoritosService.obtenerTodos(usuarioId);
  }

  //Función para obtener solo un favorito del usuario
  @Get('/:favoritoId')
  @UseGuards(AuthGuard) //Protección con JWT
  obtenerFavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.obtenerFavorito(favoritoId);
  }

  //Función para obtener un favorito
  @Delete('/:favoritoId')
  @UseGuards(AuthGuard) //Protección con JWT
  eliminarfavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.eliminarFavorito(favoritoId);
  }
}
