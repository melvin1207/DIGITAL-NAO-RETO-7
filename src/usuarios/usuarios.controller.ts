import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
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
  obtenerUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.datosUsuario(usuarioId);
  }

  @Patch(':usuarioId')
  actualizarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.actualizarUsuario(usuarioId, nuevoUsuario);
  }

  @Patch('/activate/:usuarioId')
  activarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.activarUsuario(usuarioId, nuevoUsuario);
  }

  @Delete('/desactivate/:usuarioId')
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
