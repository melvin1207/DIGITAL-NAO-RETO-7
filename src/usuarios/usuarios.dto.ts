export class UsuarioDto {
  readonly id: number;
  readonly nombre: string;
  readonly apellido: string;
  readonly email: string;
  password: string;
  activo: boolean;
}
