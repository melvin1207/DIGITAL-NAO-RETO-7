import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  appellido: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  activo: boolean;
}
