import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favorito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuarioId: number;

  @Column()
  libroId: number;
}
