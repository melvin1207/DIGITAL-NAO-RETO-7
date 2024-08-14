import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  activo: boolean;
}
