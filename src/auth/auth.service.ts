//librerias principales
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//DTOS y entidades para la creación ylogueo de usuarios
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Usuario } from 'src/usuarios/usuarios.entity';

//Servicios para los usuario
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {} //constructor

  //se registra un nuevo usuario
  async register(nuevoUsuario: RegisterDto) {
    //se verifica si no existe el mismo email
    const user = await this.usuariosRepository.findOne({
      where: { email: nuevoUsuario.email },
    });

    //si si existe se lanza un error
    if (user) {
      throw new BadRequestException('Email already exists');
    }

    //hasheo de la contraseña
    const hashedPassword = await bcryptjs.hash(nuevoUsuario.password, 10);
    nuevoUsuario.password = hashedPassword;

    //se guarda el nuevo usuario
    this.usuariosRepository.save(nuevoUsuario);

    //mensaje
    return {
      message: 'User created successfully',
    };
  }

  //logueo de un usuario
  async login(nuevoUsuario: LoginDto) {
    //se verifica si existe con el email
    const user = await this.usuariosRepository.findOne({
      where: { email: nuevoUsuario.email },
    });

    //si no existe debe reintentar
    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    //se verifica la contraseña
    const isPasswordValid = await bcryptjs.compare(
      nuevoUsuario.password,
      user.password,
    );

    //si no es valida debe reintentar
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    //si todo es correcto se devuelve el token
    const payload = { email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      token: token,
      email: user.email,
    };
  }
}
