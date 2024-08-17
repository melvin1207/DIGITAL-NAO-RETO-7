//librerias principales
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';

//modulos necesarios
import { Usuario } from 'src/usuarios/usuarios.entity';
import { AuthController } from './auth.controller';

//dotenv para el manejo de variables de entorno
import * as dotenv from 'dotenv';
dotenv.config();

//funcion principal
@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]), //que se utilizara

    //se configura el JWT
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController], //que hara
  providers: [AuthService], //con que lo hara
})
export class AuthModule {} //se exporta para su uso
