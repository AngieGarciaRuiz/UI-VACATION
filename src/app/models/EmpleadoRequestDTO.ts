export interface EmpleadoRequestDTO {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    telefono: string | null;
    direccion: string;
    fechaNacimiento: string;
    sueldo: number;
    departamentoId: number;
    descripcionDepartamento: string;
    horarioId: number;
    descripcionHorario: string;
    estado: boolean;
  }