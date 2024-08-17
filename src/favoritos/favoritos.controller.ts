import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Req,
  Body,
} from '@nestjs/common';

import { FavoritosService } from './favoritos.service';
import { Request } from 'express';
import { FavoritoDto } from './favoritos.dto';
import { Favorito } from './favoritos.entity';

@Controller('favoritos')
export class FavoritosController {
  constructor(private favoritosService: FavoritosService) {}

  @Post()
  crearFavorito(@Body() nuevoFavorito: FavoritoDto): Promise<Favorito> {
    return this.favoritosService.crearFavorito(nuevoFavorito);
  }

  @Get()
  obtenerTodos(@Req() request: Request): Promise<Favorito[]> {
    return this.favoritosService.obtenerTodos(request.query);
  }

  @Get(':favoritoId')
  obtenerFavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.obtenerFavorito(favoritoId);
  }

  @Delete(':favoritoId')
  eliminarfavorito(@Param('favoritoId') favoritoId: string): Promise<Favorito> {
    return this.favoritosService.eliminarFavorito(favoritoId);
  }
}
