import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Estado } from '../models/estado.model';

@Injectable({
  providedIn: 'root'
})
export class GenericoService<T> {

  protected api: string = environment.apiUrlBase
  protected endpoint: string = ''

  constructor(protected http: HttpClient) { }

  ListarTodos(): Observable<T[]> {
    return this.http.get<T[]>(`${this.api}/${this.endpoint}`);
  }

  ListarPorId(id: string): Observable<T>{
    return this.http.get<T>(`${this.api}/${this.endpoint}/${id}`);
  }

  Crear(datos: T): Observable<void>{
    return this.http.post<void>(`${this.api}/${this.endpoint}`, datos);
  }

  Actualizar(id: string, datos: T): Observable<void>{
    return this.http.put<void>(`${this.api}/${this.endpoint}/${id}`, datos);
  }

  Eliminar(id: string): Observable<void>{
    return this.http.delete<void>(`${this.api}/${this.endpoint}/${id}`);
  }

  CambiarEstado(id: string, datos: Estado): Observable<void>{
    return this.http.post<void>(`${this.api}/${this.endpoint}/cambiar-estado/${id}`, datos);
  }

}
