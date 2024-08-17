import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Favorito } from 'src/favoritos/favoritos.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => Favorito, (favorito) => favorito.usuario)
  favoritos: Favorito[];

  @Column()
  activo: boolean;
}
