import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { ComandoCrearPQRD } from '../models/ComandoPqrd.model';
import { RespuestaPQRD } from '../models/RespuestaPqrd.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PQRDUsuario } from '../models/pqrdUsuario.model';

@Injectable({
  providedIn: 'root'
})
export class PqrdService extends GenericoService<RespuestaPQRD, ComandoCrearPQRD> {

  constructor(http: HttpClient) { 
    super(http);
    this.endpoint = "pqrd";
  }

  ListarPorRadicado(radicado: string): Observable<RespuestaPQRD>{
    return this.http.get<RespuestaPQRD>(`${this.api}/${this.endpoint}/listar-por-radicado/${radicado}`);
  }

  ListarPQRDUsuario(datos: PQRDUsuario): Observable<RespuestaPQRD>{
    return this.http.post<RespuestaPQRD>(`${this.api}/${this.endpoint}/listar-pqrd-usuario`, datos);
  }

}
