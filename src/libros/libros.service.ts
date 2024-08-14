import { Injectable } from '@nestjs/common';
import { LibroDto } from './libro.dto';
import { Libro } from './libros.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro) private librosRepository: Repository<Libro>,
  ) {}

  crearLibro(nuevoLibro: LibroDto): Promise<Libro> {
    return this.librosRepository.save(nuevoLibro);
  }
  async obtenerTodos(params): Promise<Libro[]> {
    return await this.librosRepository.find();
  }
  async obtenerLibro(libroId: string): Promise<Libro> {
    return await this.librosRepository.findOne({
      where: { id: parseInt(libroId) },
    });
  }
  async actualizarLibro(
    libroId: string,
    libroActualizado: LibroDto,
  ): Promise<Libro> {
    const toUpdate = await this.librosRepository.findOne({
      where: { id: parseInt(libroId) },
    });

    const updated = Object.assign(toUpdate, libroActualizado);

    return this.librosRepository.save(updated);
  }
  async desactivarLibro(
    libroId: string,
    libroActualizado: LibroDto,
  ): Promise<Libro> {
    const toUpdate = await this.librosRepository.findOne({
      where: { id: parseInt(libroId) },
    });

    toUpdate.activo = false;
    const updated = Object.assign(toUpdate, libroActualizado);

    return this.librosRepository.save(updated);
  }
  async activarLibro(
    libroId: string,
    libroActualizado: LibroDto,
  ): Promise<Libro> {
    const toUpdate = await this.librosRepository.findOne({
      where: { id: parseInt(libroId) },
    });

    toUpdate.activo = true;
    const updated = Object.assign(toUpdate, libroActualizado);

    return this.librosRepository.save(updated);
  }
  async eliminarLibro(libroId: string): Promise<any> {
    return await this.librosRepository.delete({ id: parseInt(libroId) });
  }
}
