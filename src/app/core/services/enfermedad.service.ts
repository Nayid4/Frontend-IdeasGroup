import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Enfermedad } from '../models/enfermedad.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService extends GenericoService<Enfermedad> {

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "enfermedad"
  }

}
