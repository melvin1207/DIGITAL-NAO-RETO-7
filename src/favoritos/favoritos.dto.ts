//librerias para la documentación
import { ApiProperty } from '@nestjs/swagger';

//DTO para un favorito
export class FavoritoDto {
  @ApiProperty({ example: 1 }) //propiedad para la documentación
  usuarioId: number; //FK para el usuario

  @ApiProperty({ example: 1 }) //propiedad para la documentación
  libroId: number; //FK para el libro
}
