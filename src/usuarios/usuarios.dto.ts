//librerias para la documentación
import { ApiProperty } from '@nestjs/swagger';

//DTO de usuarios
export class UsuarioDto {
  @ApiProperty({ example: 'Melvin' }) //propiedad para la documentación
  readonly nombre: string;

  @ApiProperty({ example: 'Gonzalez' }) //propiedad para la documentación
  readonly apellido: string;

  @ApiProperty({ example: 'melvin@gmail.com' }) //propiedad para la documentación
  readonly email: string;

  @ApiProperty({ example: '1234hrfk' }) //propiedad para la documentación
  password: string;

  @ApiProperty({ example: true }) //propiedad para la documentación
  activo: boolean; //se utiliza para un borrado logico
}
