//librerias para la documentación
import { ApiProperty } from '@nestjs/swagger';

//DTO de libros
export class LibroDto {
  @ApiProperty({ example: 'Don quijote de la mancha' }) //propiedad para la documentación
  readonly titulo: string;

  @ApiProperty({ example: 'Novela' }) //propiedad para la documentación
  readonly genero: string;

  @ApiProperty({
    example: 'Esta edición del Ingenioso hidalgo don Quijote de la Mancha ...',
  }) //propiedad para la documentación
  readonly resumen: string;

  @ApiProperty({ example: 'Miguel de Cervantes' }) //propiedad para la documentación
  readonly autor: string;

  @ApiProperty({ example: 'Ranmdom Penguin House' }) //propiedad para la documentación
  readonly editorial: string;

  @ApiProperty({ example: 592 }) //propiedad para la documentación
  readonly paginas: number;

  @ApiProperty({ example: true }) //propiedad para la documentación
  activo: boolean; //se utiliza para un borrado logico
}
