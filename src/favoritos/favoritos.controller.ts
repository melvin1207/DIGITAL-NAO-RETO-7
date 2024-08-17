import { Controller, Delete, Get, Post, Param, Body } from '@nestjs/common';

import { FavoritosService } from './favoritos.service';
import { FavoritoDto } from './favoritos.dto';
import { Favorito } from './favoritos.entity';

@Controller('favoritos')
export class FavoritosController {
  constructor(private favoritosService: FavoritosService) {}

  @Post('/:libroId/:usuarioId')
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

  @Get('/todos/:usuarioId')
  obtenerTodos(@Param('usuarioId') usuarioId: string): Promise<Favorito[]> {
    return this.favoritosService.obtenerTodos(usuarioId);
  }

  @Get('/:favoritoId')
  obtenerFavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.obtenerFavorito(favoritoId);
  }

  @Delete('/:favoritoId')
  eliminarfavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.eliminarFavorito(favoritoId);
  }
}
