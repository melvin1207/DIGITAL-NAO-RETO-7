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

//se importa las librerias para la documentación
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

//Se importa el DTO, la entidad y los servicios de los usuarios
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';

//Función para verificar el JWT
import { AuthGuard } from 'src/auth/guard/auth.guard';

//Controlador para manejar los usuarios
@ApiTags('usuarios') //tag de los usuarios
@Controller('usuarios')
@UseGuards(AuthGuard) // se protege con JWT
@ApiBearerAuth('acces-token') // metodo de autorizacion
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {} //constructor

  //Obtiene datos de usuario
  @Get(':usuarioId') //ruta que usa
  @ApiOperation({ summary: 'Obtiene datos de usuario' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del usuario',
    type: UsuarioDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 201,
    description: 'Unauthorized',
  }) //respuesta negativa
  obtenerUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.datosUsuario(usuarioId); //llamado al servicio
  }

  //actualizar un usuarip
  @Patch(':usuarioId') //ruta que usa
  @ApiOperation({ summary: 'Actualizar usuario' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del usuario',
    type: UsuarioDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  actualizarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.actualizarUsuario(usuarioId, nuevoUsuario); //llamado al servicio
  }

  //activar un usuario
  @Patch('/activate/:usuarioId') //ruta que usa
  @ApiOperation({ summary: 'Activar usuario' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del usuario',
    type: UsuarioDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  activarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.activarUsuario(usuarioId, nuevoUsuario); //llamado al servicio
  }

  //desactivar un usuario
  @Delete('/desactivate/:usuarioId') //ruta que usa
  @ApiOperation({ summary: 'Desactivar usuario' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del usuario',
    type: UsuarioDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  desactivarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.desactivarUsuario(usuarioId, nuevoUsuario); //llamado al servicio
  }

  //eliminar un usuario
  @Delete(':usuarioId') //ruta que usa
  @ApiOperation({ summary: 'Eliminar usuario' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'OK',
  }) //respuesta positiva
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  }) //respuesta negativa
  eliminarUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.eliminarUsuario(usuarioId); //llamado al servicio
  }
}
