import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Usuario, UsuarioRegistro } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericoService<Usuario, UsuarioRegistro> {

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "usuarios"
  }
  
}
