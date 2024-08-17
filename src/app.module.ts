import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosModule } from './libros/libros.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FavoritosModule } from './favoritos/favoritos.module';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    LibrosModule,
    UsuariosModule,
    FavoritosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',

      host: process.env.MEGACORP_HOST,
      port: parseInt(process.env.MEGACORP_PORT),
      username: process.env.MEGACORP_USER,
      password: process.env.MEGACORP_PASSWORD,
      database: process.env.MEGACORP_DATABASE,
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
