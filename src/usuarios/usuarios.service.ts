//librerias principales
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//DTO y entidad de usuario
import { UsuarioDto } from './usuarios.dto';
import { Usuario } from './usuarios.entity';

//Servicios para los usuario
@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>,
  ) {} //constructor

  //se obtiene un usuario
  async datosUsuario(usuarioId: string): Promise<Usuario> {
    return await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) }, //se busca con el Id
      relations: {
        favoritos: true,
      },
      select: ['id', 'nombre', 'apellido', 'email', 'favoritos', 'activo'],
    });
  }

  //modifica un usuario
  async actualizarUsuario(
    //parametros requeridos
    usuarioId: string,
    usuarioActualizado: UsuarioDto,
  ): Promise<Usuario> {
    const toUpdate = await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) }, //se busca el usuario con el id
      select: ['id', 'nombre', 'apellido', 'email', 'favoritos', 'activo'],
    });
    const updated = Object.assign(toUpdate, usuarioActualizado); //se avctualiza

    return this.usuariosRepository.save(updated); //se guarda
  }

  //desactivar usuario
  async desactivarUsuario(
    //parametros requeridos
    usuarioId: string,
  ): Promise<Usuario> {
    const updateUsuario = await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) }, //se busca el usuario con el id
      select: ['id', 'nombre', 'apellido', 'email', 'favoritos', 'activo'],
    });

    updateUsuario.activo = false; //se cambia el estado activo

    return this.usuariosRepository.save(updateUsuario); //se guarda
  }

  //activar usuario
  async activarUsuario(
    //parametros requeridos
    usuarioId: string,
  ): Promise<Usuario> {
    const updateUser = await this.usuariosRepository.findOne({
      where: { id: parseInt(usuarioId) }, //se busca el usuario con el id
      select: ['id', 'nombre', 'apellido', 'email', 'favoritos', 'activo'],
    });

    updateUser.activo = true;

    return this.usuariosRepository.save(updateUser); //se guarda
  }

  //eliminar usuario
  async eliminarUsuario(usuarioId: string): Promise<any> {
    return await this.usuariosRepository.delete({ id: parseInt(usuarioId) });
  }
}
