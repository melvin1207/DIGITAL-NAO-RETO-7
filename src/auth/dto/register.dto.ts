//librerias principales
import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

//librerias para la documentación
import { ApiProperty } from '@nestjs/swagger';

//DTO para registrar un usuario
export class RegisterDto {
  @ApiProperty({ example: 'Melvin' }) //propiedad para la documentación
  @IsString()
  @MinLength(1)
  nombre: string;

  @ApiProperty({ example: 'Gonzalez' }) //propiedad para la documentación
  @IsString()
  @MinLength(1)
  apellido: string;

  @ApiProperty({ example: 'melvin@gmail.com' }) //propiedad para la documentación
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'amnndnd34' }) //propiedad para la documentación
  @IsString()
  @Transform(({ value }) => value.trim())
  password: string;

  @ApiProperty({ example: true }) //propiedad para la documentación
  activo: boolean;
}
