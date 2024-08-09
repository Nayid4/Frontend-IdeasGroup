import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Enfermedad, EnfermedadRegistro } from '../models/enfermedad.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService extends GenericoService<Enfermedad, EnfermedadRegistro> {

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "enfermedad"
  }

}
