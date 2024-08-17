import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';

import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post()
  crearUsuario(@Body() nuevoUsuario: UsuarioDto): Promise<Usuario> {
    return this.usuariosService.crearUsuario(nuevoUsuario);
  }

  @Get(':usuarioId')
  @UseInterceptors(ClassSerializerInterceptor)
  obtenerUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.datosUsuario(usuarioId);
  }

  @Patch(':usuarioId')
  @UseInterceptors(ClassSerializerInterceptor)
  actualizarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.actualizarUsuario(usuarioId, nuevoUsuario);
  }

  @Patch('/activate/:usuarioId')
  @UseInterceptors(ClassSerializerInterceptor)
  activarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.activarUsuario(usuarioId, nuevoUsuario);
  }

  @Delete('/desactivate/:usuarioId')
  @UseInterceptors(ClassSerializerInterceptor)
  desactivarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.desactivarUsuario(usuarioId, nuevoUsuario);
  }

  @Delete(':usuarioId')
  eliminarUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.eliminarUsuario(usuarioId);
  }
}
