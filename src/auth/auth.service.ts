import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/usuarios.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async register(nuevoUsuario: RegisterDto) {
    const user = await this.usuariosRepository.findOne({
      where: { email: nuevoUsuario.email },
    });

    if (user) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcryptjs.hash(nuevoUsuario.password, 10);

    nuevoUsuario.password = hashedPassword;

    this.usuariosRepository.save(nuevoUsuario);

    return {
      message: 'User created successfully',
    };
  }

  async login(nuevoUsuario: LoginDto) {
    const user = await this.usuariosRepository.findOne({
      where: { email: nuevoUsuario.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPasswordValid = await bcryptjs.compare(
      nuevoUsuario.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      token: token,
      email: user.email,
    };
  }
}
