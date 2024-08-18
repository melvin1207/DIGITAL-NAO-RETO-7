//librerias principales
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//DTO y entidad de libro
import { LibroDto } from './libro.dto';
import { Libro } from './libros.entity';

//Servicios para ls libro
@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro) private librosRepository: Repository<Libro>,
  ) {} //constructor

  //se crea un libro
  crearLibro(nuevoLibro: LibroDto): Promise<Libro> {
    return this.librosRepository.save(nuevoLibro); //se guarda el libro en la DB
  }

  //Obtener todos los libros
  async obtenerTodos(params): Promise<Libro[]> {
    return await this.librosRepository.find(); //se buscan todos los libros en la DB
  }

  //solo un libro
  async obtenerLibro(libroId: string): Promise<Libro> {
    return await this.librosRepository.findOne({
      where: { id: parseInt(libroId) }, //Se busca un libro con el ID en la BD
    });
  }

  //se modifica el libro
  async actualizarLibro(
    //parametros necesarios
    libroId: string,
    libroActualizado: LibroDto,
  ): Promise<Libro> {
    const toUpdate = await this.librosRepository.findOne({
      where: { id: parseInt(libroId) }, //se busca el libro en la BD  con el ID
    });

    const updated = Object.assign(toUpdate, libroActualizado); //se actualizan los datos

    return this.librosRepository.save(updated); //se guardan en la BD
  }

  //se desactiva el libro
  async desactivarLibro(libroId: string): Promise<Libro> {
    const updateLibro = await this.librosRepository.findOne({
      where: { id: parseInt(libroId) }, //se busca el libro en la BD  con el ID
    });

    updateLibro.activo = false; //se actualiza el estado

    return this.librosRepository.save(updateLibro); //se guardan en la BD
  }

  //se activa un libro
  async activarLibro(libroId: string): Promise<Libro> {
    const updateLibro = await this.librosRepository.findOne({
      where: { id: parseInt(libroId) }, //se busca el libro en la BD  con el ID
    });

    updateLibro.activo = true; //Se cambia el estado

    return this.librosRepository.save(updateLibro); //se guardan en la BD
  }

  //eliminar un libro
  async eliminarLibro(libroId: string): Promise<any> {
    return await this.librosRepository.delete({ id: parseInt(libroId) });
  }
}
