//librerias principales
import { Transform } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

//DTO para loguear
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  password: string;
}
