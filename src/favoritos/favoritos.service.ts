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

  async crearFavorito(
    nuevoFavorito: FavoritoDto,
    libroId: string,
    usuarioId: string,
  ): Promise<Favorito> {
    nuevoFavorito.libroId = parseInt(libroId);
    nuevoFavorito.usuarioId = parseInt(usuarioId);
    return this.favoritosRepository.save(nuevoFavorito);
  }

  async obtenerTodos(usuarioId: string): Promise<Favorito[]> {
    return await this.favoritosRepository.find({
      where: { usuarioId: parseInt(usuarioId) },
      relations: {
        libro: true,
      },
    });
  }

  async obtenerFavorito(favoritoId: string): Promise<Favorito> {
    return await this.favoritosRepository.findOne({
      where: { id: parseInt(favoritoId) },
      relations: {
        libro: true,
        usuario: true,
      },
    });
  }

  async eliminarFavorito(favoritoId: string): Promise<any> {
    return await this.favoritosRepository.delete({ id: parseInt(favoritoId) });
  }
}
