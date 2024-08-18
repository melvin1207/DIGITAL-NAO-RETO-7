//funciones basicas para el funcionamiento de la entidad
import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  ManyToOne,
} from 'typeorm';

//librerias para la documentación
import { ApiProperty } from '@nestjs/swagger';

//se importa las entidades de libro y usuario para las FK
import { Libro } from 'src/libros/libros.entity';
import { Usuario } from 'src/usuarios/usuarios.entity';

//Función principal
@Entity()
export class Favorito {
  //Columna principal
  @ApiProperty({ example: 1 }) //propiedad para la documentación
  @PrimaryGeneratedColumn()
  id: number;

  //creación de la columna para el manejo de los id de usuario
  @ApiProperty({ example: 1 }) //propiedad para la documentación
  @Column({ name: 'usuario_id' })
  usuarioId: number;

  //relación Many to One de Favorito hacia los usuarios
  @ManyToOne(() => Usuario, (usuario) => usuario.favoritos)
  @JoinColumn({ name: 'usuario_id' }) //se hace un join con las columnas del usuario
  usuario: Usuario;

  //creación de la columna para el manejo de los id de libro
  @ApiProperty({ example: 1 }) //propiedad para la documentación
  @Column({ name: 'libro_id' })
  libroId: number;

  //relación Many to One de Favorito hacia los usuarios
  @ManyToOne(() => Libro, (libro) => libro.id)
  @JoinColumn({ name: 'libro_id' }) //se hace un join con las columnas del libro
  libro: Libro;
}
