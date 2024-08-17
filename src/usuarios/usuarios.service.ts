import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>,
  ) {}

  async crearUsuario(nuevoUsuario: UsuarioDto): Promise<Usuario> {
    //Se hace el HASH del password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(nuevoUsuario.password, salt);

    nuevoUsuario.password = hashedPassword;

    return this.usuariosRepository.save(nuevoUsuario);
  }

  async datosUsuario(usuarioId: string): Promise<Usuario> {
    return await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) },
      relations: {
        favoritos: true,
      },
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
