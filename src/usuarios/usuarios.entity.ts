//funciones principales para el funcionameinto de la función
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

//se importa la entidad de favorito para la relación de tablas
import { Favorito } from 'src/favoritos/favoritos.entity';

//función principal
@Entity()
export class Usuario {
  //columna principal
  @PrimaryGeneratedColumn()
  id: number;

  //nombre del usuario
  @Column()
  nombre: string;

  //apellido del usuario
  @Column()
  apellido: string;

  //email
  @Column({ unique: true })
  email: string;

  //contraseña
  @Column()
  password: string;

  //relacion con Favoritos
  @OneToMany(() => Favorito, (favorito) => favorito.usuario)
  favoritos: Favorito[];

  //propiedad para activar o desactivar el usuario
  @Column()
  activo: boolean;
}
