import { Injectable } from '@nestjs/common';

@Injectable()
export class LibrosService {
  crearLibro(): any {
    return 'Crear Libro';
  }
  obtenerTodos(params): any {
    let msg = `obtenerTodos listo. Con los Parámetros `;

    if (params.order !== undefined) {
      msg = msg + `order: ${params.order}`;
    }
    if (params.limit !== undefined) {
      msg = msg + ` limit: ${params.limit}`;
    }

    return msg;
  }
  obtenerLibro(libroId: string) {
    return `Obtener libro con Id: ${libroId}`;
  }
  actualizarLibro() {
    return 'actualizar libro listo';
  }
  activarLibro() {
    return 'activar libro listo';
  }
  desactivarLibro() {
    return 'desactivar libro listo';
  }
  eliminarLibro() {
    return 'eliminar libro listo';
  }
}
