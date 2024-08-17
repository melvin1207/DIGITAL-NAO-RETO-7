import { Injectable } from '@nestjs/common';
import { FavoritoDto } from './favoritos.dto';
import { Favorito } from './favoritos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritosService {
  constructor(
    @InjectRepository(Favorito)
    private favoritosRepository: Repository<Favorito>,
  ) {}

  crearFavorito(nuevoFavorito: FavoritoDto): Promise<Favorito> {
    return this.favoritosRepository.save(nuevoFavorito);
  }

  async obtenerTodos(params): Promise<Favorito[]> {
    return await this.favoritosRepository.find();
  }

  async obtenerFavorito(favoritoId: string): Promise<Favorito> {
    return await this.favoritosRepository.findOne({
      where: { id: parseInt(favoritoId) },
    });
  }

  async eliminarFavorito(favoritoId: string): Promise<any> {
    return await this.favoritosRepository.delete({ id: parseInt(favoritoId) });
  }
}
