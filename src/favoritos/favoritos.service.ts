//librerias pricnipales de funcionamiento
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//Importación del DTO y la entidad de Favorito
import { FavoritoDto } from './favoritos.dto';
import { Favorito } from './favoritos.entity';

//Función principal
@Injectable()
export class FavoritosService {
  constructor(
    @InjectRepository(Favorito)
    private favoritosRepository: Repository<Favorito>,
  ) {} //Constructor

  //Crear un favorito
  async crearFavorito(
    //requerimeintos para su funcionamiento
    nuevoFavorito: FavoritoDto,
    libroId: string,
    usuarioId: string,
  ): Promise<Favorito> {
    //se guardan los ids de usuario y libro en el nuevo favorito
    nuevoFavorito.libroId = parseInt(libroId);
    nuevoFavorito.usuarioId = parseInt(usuarioId);
    return this.favoritosRepository.save(nuevoFavorito); //se guarda el nuevo favorito
  }

  //obtener todos los favoritos de un usuario
  async obtenerTodos(usuarioId: string): Promise<Favorito[]> {
    //busqueda de todos los elementos que sean del mismo usuario
    return await this.favoritosRepository.find({
      where: { usuarioId: parseInt(usuarioId) },
      relations: {
        libro: true,
      },
    });
  }

  //obtener un favorito de un usuario
  async obtenerFavorito(favoritoId: string): Promise<Favorito> {
    return await this.favoritosRepository.findOne({
      //se busca el favorito con el Id del url
      where: { id: parseInt(favoritoId) },
      relations: {
        libro: true,
        usuario: true,
      },
    });
  }

  //eliminar un favorito de un usuario
  async eliminarFavorito(favoritoId: string): Promise<any> {
    //se elimina el favorito con el Id del url
    return await this.favoritosRepository.delete({ id: parseInt(favoritoId) });
  }
}
