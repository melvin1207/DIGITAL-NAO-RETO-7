//librerias principales
import { Body, Controller, Post } from '@nestjs/common';

//dtos y Auth service
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

//se importa las librerias para la documentación
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

//función principal
@ApiTags('auth') //tag de la autenticacion
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //registrar un usuario
  @Post('register') //ruta que utiliza
  @ApiOperation({ summary: 'Se crea un usuario' }) //descripcion
  @ApiResponse({
    status: 201,
    description: 'Datos del usuario',
    type: RegisterDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  }) //respuesta negativa
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto); //se llama al servicio
  }

  //logueo
  @Post('login') //ruta que utiliza
  @ApiOperation({ summary: 'Se loguea un usuario' }) //descripcion
  @ApiResponse({
    status: 200,
    description: 'Datos del usuario',
    type: LoginDto,
  }) //respuesta positiva
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  }) //respuesta negativa
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto); //se llama al servicio
  }
}
