//librerias principales
import {
  Controller,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

//Se importa el DTO, la entidad y los servicios de los usuarios
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';

//Función para verificar el JWT
import { AuthGuard } from 'src/auth/guard/auth.guard';

//Controlador para manejar los usuarios
@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {} //constructor

  //Obtiene datos de usuario
  @Get(':usuarioId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  obtenerUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.datosUsuario(usuarioId); //llamado al servicio
  }

  //actualizar un usuarip
  @Patch(':usuarioId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  actualizarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.actualizarUsuario(usuarioId, nuevoUsuario); //llamado al servicio
  }

  //activar un usuario
  @Patch('/activate/:usuarioId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  activarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.activarUsuario(usuarioId, nuevoUsuario); //llamado al servicio
  }

  //desactivar un usuario
  @Delete('/desactivate/:usuarioId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  desactivarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.desactivarUsuario(usuarioId, nuevoUsuario); //llamado al servicio
  }

  //eliminar un usuario
  @Delete(':usuarioId') //ruta que usa
  @UseGuards(AuthGuard) // se protege con JWT
  eliminarUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.eliminarUsuario(usuarioId); //llamado al servicio
  }
}
