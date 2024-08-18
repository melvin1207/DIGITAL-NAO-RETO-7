//librerias principales
import { Transform } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

//librerias para la documentación
import { ApiProperty } from '@nestjs/swagger';

//DTO para loguear
export class LoginDto {
  @ApiProperty({ example: 'melvin@gmail.com' }) //propiedad para la documentación
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'amnndnd34' }) //propiedad para la documentación
  @IsString()
  @Transform(({ value }) => value.trim())
  password: string;
}
