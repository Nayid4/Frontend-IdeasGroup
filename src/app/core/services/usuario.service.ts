import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Usuario } from '../models/Usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericoService<Usuario> {

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "usuarios"
  }
  
}
