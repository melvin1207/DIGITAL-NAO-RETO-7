import {
  Controller,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get(':usuarioId')
  @UseGuards(AuthGuard)
  obtenerUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.datosUsuario(usuarioId);
  }

  @Patch(':usuarioId')
  @UseGuards(AuthGuard)
  actualizarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.actualizarUsuario(usuarioId, nuevoUsuario);
  }

  @Patch('/activate/:usuarioId')
  @UseGuards(AuthGuard)
  activarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.activarUsuario(usuarioId, nuevoUsuario);
  }

  @Delete('/desactivate/:usuarioId')
  @UseGuards(AuthGuard)
  desactivarUsuario(
    @Param('usuarioId') usuarioId: string,
    @Body() nuevoUsuario: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuariosService.desactivarUsuario(usuarioId, nuevoUsuario);
  }

  @Delete(':usuarioId')
  @UseGuards(AuthGuard)
  eliminarUsuario(@Param('usuarioId') usuarioId: string): Promise<Usuario> {
    return this.usuariosService.eliminarUsuario(usuarioId);
  }
}
