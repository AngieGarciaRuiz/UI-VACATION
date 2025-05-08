import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoResponseDTO } from '../../models/EmpleadoResponseDTO';
 
@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) {}

  obtenerEmpleados(): Observable<EmpleadoResponseDTO[]> {
    return this.http.get<EmpleadoResponseDTO[]>(this.apiUrl);
  }

  // Otros métodos como crear, actualizar o eliminar empleados.
}
