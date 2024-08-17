import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Libro } from 'src/libros/libros.entity';
import { Usuario } from 'src/usuarios/usuarios.entity';

@Entity()
export class Favorito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'usuario_id' })
  usuarioId: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.favoritos)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ name: 'libro_id' })
  libroId: number;

  @ManyToOne(() => Libro, (libro) => libro.id)
  @JoinColumn({ name: 'libro_id' })
  libro: Libro;
}
