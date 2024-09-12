import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { RespuestaTramiteInstitucional } from '../models/RespuestaPqrd.model';
import { Seguimiento } from '../models/seguimiento.model';

@Injectable({
  providedIn: 'root'
})
export class TramitesInstitucionesService {

  protected api: string = environment.apiUrlBase
  protected endpoint: string = 'tramite-institucional'
  
  constructor(private http: HttpClient) { }

  ListarPorId(id: string): Observable<RespuestaTramiteInstitucional>{
    return this.http.get<RespuestaTramiteInstitucional>(`${this.api}/${this.endpoint}/${id}`);
  }

  AgregarSeguimiento(seguimiento: Seguimiento): Observable<void>{
    return this.http.post<void>(`${this.api}/${this.endpoint}/agregar-seguimiento/${seguimiento.idPQRD}`, seguimiento);
  }
}
