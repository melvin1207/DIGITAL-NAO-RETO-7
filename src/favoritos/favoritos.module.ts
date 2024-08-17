import { Module } from '@nestjs/common';
import { Favorito } from './favoritos.entity';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from 'src/libros/libros.entity';
import { Usuario } from 'src/usuarios/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorito, Libro, Usuario])],
  providers: [FavoritosService],
  controllers: [FavoritosController],
})
export class FavoritosModule {}
