//DTO de libros
export class LibroDto {
  readonly titulo: string; 
  readonly genero: string;
  readonly resumen: string;
  readonly autor: string;
  readonly editorial: string;
  readonly paginas: number;
  activo: boolean; //se utiliza para un borrado logico
}
