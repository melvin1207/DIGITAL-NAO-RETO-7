import { Favorito } from 'src/favoritos/favoritos.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  genero: string;

  @Column('text')
  resumen: string;

  @Column()
  autor: string;

  @Column()
  editorial: string;

  @Column()
  paginas: number;

  @OneToMany(() => Favorito, (favorito) => favorito.libro)
  favoritos: Favorito[];

  @Column()
  activo: boolean;
}
