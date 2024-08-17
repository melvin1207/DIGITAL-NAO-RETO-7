import { Module } from '@nestjs/common';
import { Favorito } from './favoritos.entity';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Favorito])],
  providers: [FavoritosService],
  controllers: [FavoritosController],
})
export class FavoritosModule {}
