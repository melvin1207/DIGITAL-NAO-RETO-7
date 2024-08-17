//se importa la entidad de favorito para la relación de tablas
import { Favorito } from 'src/favoritos/favoritos.entity';

//funciones principales para el funcionameinto de la función
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

//función principal
@Entity()
export class Libro {
  //columna principal
  @PrimaryGeneratedColumn()
  id: number;

  //titulo del libro, debe ser unico
  @Column({ unique: true })
  titulo: string;

  //genero literario
  @Column()
  genero: string;

  //sinopsisi del libro
  @Column('text')
  resumen: string;

  //autor
  @Column()
  autor: string;

  @Column()
  editorial: string;

  //numero de paginas
  @Column()
  paginas: number;

  //relacion con Favoritos
  @OneToMany(() => Favorito, (favorito) => favorito.libro)
  favoritos: Favorito[];

  //propiedad para activar o desactivar el libro
  @Column()
  activo: boolean;
}
