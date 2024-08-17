import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>,
  ) {}

  crearUsuario(nuevoUsuario: UsuarioDto): Promise<Usuario> {
    return this.usuariosRepository.save(nuevoUsuario);
  }

  async datosUsuario(usuarioId: string): Promise<Usuario> {
    return await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) },
    });
  }

  async actualizarUsuario(
    usuarioId: string,
    usuarioActualizado: UsuarioDto,
  ): Promise<Usuario> {
    const toUpdate = await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) },
    });

    const updated = Object.assign(toUpdate, usuarioActualizado);

    return this.usuariosRepository.save(updated);
  }

  async desactivarUsuario(
    usuarioId: string,
    usuarioActualizado: UsuarioDto,
  ): Promise<Usuario> {
    const toUpdate = await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) },
    });

    toUpdate.activo = false;
    const updated = Object.assign(toUpdate, usuarioActualizado);

    return this.usuariosRepository.save(updated);
  }

  async activarUsuario(
    usuarioId: string,
    usuarioActualizado: UsuarioDto,
  ): Promise<Usuario> {
    const toUpdate = await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) },
    });

    toUpdate.activo = true;
    const updated = Object.assign(toUpdate, usuarioActualizado);

    return this.usuariosRepository.save(updated);
  }

  async eliminarUsuario(usuarioId: string): Promise<any> {
    return await this.usuariosRepository.delete({ id: parseInt(usuarioId) });
  }
}
