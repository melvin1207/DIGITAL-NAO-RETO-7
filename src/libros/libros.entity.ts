//librerias para la documentación
import { ApiProperty } from '@nestjs/swagger';

//se importa la entidad de favorito para la relación de tablas
import { Favorito } from 'src/favoritos/favoritos.entity';

//funciones principales para el funcionameinto de la función
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

//función principal
@Entity()
export class Libro {
  //columna principal
  @ApiProperty({ example: 99 }) //propiedad para la documentación
  @PrimaryGeneratedColumn()
  id: number;

  //titulo del libro, debe ser unico
  @ApiProperty({ example: 'Don quijote de la mancha' }) //propiedad para la documentación
  @Column({ unique: true })
  titulo: string;

  //genero literario
  @ApiProperty({ example: 'Novela' }) //propiedad para la documentación
  @Column()
  genero: string;

  //sinopsisi del libro
  @ApiProperty({
    example: 'Esta edición del Ingenioso hidalgo don Quijote de la Mancha ...',
  }) //propiedad para la documentación
  @Column('text')
  resumen: string;

  //autor
  @ApiProperty({ example: 'Miguel de Cervantes' }) //propiedad para la documentación
  @Column()
  autor: string;

  @ApiProperty({ example: 'Ranmdom Penguin House' }) //propiedad para la documentación
  @Column()
  editorial: string;

  //numero de paginas
  @ApiProperty({ example: 592 }) //propiedad para la documentación
  @Column()
  paginas: number;

  //relacion con Favoritos
  @OneToMany(() => Favorito, (favorito) => favorito.libro)
  favoritos: Favorito[];

  //propiedad para activar o desactivar el libro
  @ApiProperty({ example: true }) //propiedad para la documentación
  @Column()
  activo: boolean;
}
