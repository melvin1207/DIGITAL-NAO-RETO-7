//librerias principales para el funcionamiento
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//importanciones de la entidad, servicio y controladores de Favoritos
import { Favorito } from './favoritos.entity';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';

//Importación de entidades de Libros y usuarios
import { Libro } from 'src/libros/libros.entity';
import { Usuario } from 'src/usuarios/usuarios.entity';

//Función principal
@Module({
  imports: [TypeOrmModule.forFeature([Favorito, Libro, Usuario])], //Entidades a utilizar
  providers: [FavoritosService], //Que servicio se ofrece
  controllers: [FavoritosController], //Verbos HTTP que se utilizan
})
export class FavoritosModule {} //se exporta para su uso en la aplicación principal
