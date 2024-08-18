//funciones principales para el funcionameinto de la función
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

//librerias para la documentación
import { ApiProperty } from '@nestjs/swagger';

//se importa la entidad de favorito para la relación de tablas
import { Favorito } from 'src/favoritos/favoritos.entity';

//función principal
@Entity()
export class Usuario {
  //columna principal
  @ApiProperty({ example: 99 }) //propiedad para la documentación
  @PrimaryGeneratedColumn()
  id: number;

  //nombre del usuario
  @ApiProperty({ example: 'Melvin' }) //propiedad para la documentación
  @Column()
  nombre: string;

  //apellido del usuario
  @ApiProperty({ example: 'Gonzalez' }) //propiedad para la documentación
  @Column()
  apellido: string;

  //email
  @ApiProperty({ example: 'melvin@gmail.com' }) //propiedad para la documentación
  @Column({ unique: true })
  email: string;

  //contraseña
  @ApiProperty({ example: '1234hrfk' }) //propiedad para la documentación
  @Column()
  password: string;

  //relacion con Favoritos
  @OneToMany(() => Favorito, (favorito) => favorito.usuario)
  favoritos: Favorito[];

  //propiedad para activar o desactivar el usuario
  @ApiProperty({ example: true }) //propiedad para la documentación
  @Column()
  activo: boolean;
}
