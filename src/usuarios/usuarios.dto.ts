//DTO de usuarios
export class UsuarioDto {
  readonly nombre: string;
  readonly apellido: string;
  readonly email: string;
  password: string;
  activo: boolean; //se utiliza para un borrado logico
}
