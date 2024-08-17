import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

import { FavoritosService } from './favoritos.service';
import { FavoritoDto } from './favoritos.dto';
import { Favorito } from './favoritos.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('favoritos')
export class FavoritosController {
  constructor(private favoritosService: FavoritosService) {}

  @Post('/:libroId/:usuarioId')
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
  obtenerTodos(@Param('usuarioId') usuarioId: string): Promise<Favorito[]> {
    return this.favoritosService.obtenerTodos(usuarioId);
  }

  @Get('/:favoritoId')
  @UseGuards(AuthGuard)
  obtenerFavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.obtenerFavorito(favoritoId);
  }

  @Delete('/:favoritoId')
  @UseGuards(AuthGuard)
  eliminarfavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.eliminarFavorito(favoritoId);
  }
}
