//librerias principales
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//entidad, servicio y controladores de los usuarios
import { Usuario } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

//función principal
@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], //que se utilizara
  providers: [UsuariosService], //acciones que se realizan
  controllers: [UsuariosController], //verbos HTTP que se usan
})
export class UsuariosModule {} //exportación para la app principal
