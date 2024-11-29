import { Injectable } from '@angular/core';
import { Rol, RolRegistro } from '../models/rol.model';
import { GenericoService } from './generico.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService extends GenericoService<Rol, RolRegistro> {

  constructor(http: HttpClient) { 
    super(http);
    this.endpoint = "rol";
  }

}
