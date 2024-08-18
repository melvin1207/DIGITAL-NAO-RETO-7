//Se exportan las librerias necesarias para el funcionamiento
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//importación de los modelos de las tablas
import { LibrosModule } from './libros/libros.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FavoritosModule } from './favoritos/favoritos.module';

//se importa el modelo de autenticación del JWT
import { AuthModule } from './auth/auth.module';

//se importa dotenv para manejo de variables de entorno
import * as dotenv from 'dotenv';
dotenv.config();

//Aplicación principal
@Module({
  imports: [
    LibrosModule, //Manejara los endpoints de libro
    UsuariosModule, //Manejara los endpoints de usuarios
    FavoritosModule, //Manejara los endpoints de Favoritos

    //Se crea la conexión con la base de datos en PostgresSQL
    TypeOrmModule.forRoot({
      type: 'postgres',

      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'megacorp',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    AuthModule, //Modulo para verificar el JWT
  ],
})
export class AppModule {} //Se exporta para su uso
