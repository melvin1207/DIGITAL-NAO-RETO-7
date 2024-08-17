//librerias principales
import { Body, Controller, Post } from '@nestjs/common';

//dtos y Auth service
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

//función principal
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //registrar un usuario
  @Post('register') //ruta que utiliza
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto); //se llama al servicio
  }

  //logueo
  @Post('login') //ruta que utiliza
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto); //se llama al servicio
  }
}
