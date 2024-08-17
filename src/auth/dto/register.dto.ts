//librerias principales
import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

//DTO para registrar un usuario
export class RegisterDto {
  @IsString()
  @MinLength(1)
  nombre: string;

  @IsString()
  @MinLength(1)
  apellido: string;

  @IsEmail()
  email: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  password: string;

  activo: boolean;
}
