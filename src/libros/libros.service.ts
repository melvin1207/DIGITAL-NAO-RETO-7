import { Injectable } from '@nestjs/common';

@Injectable()
export class LibrosService {
  crearLibro(): any {
    return 'Crear Libro';
  }
  obtenerTodos(): any {
    return 'Obtener todos listo';
  }
  obtenerLibro() {
    return 'obtener libro listo';
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
