import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioRegistro } from '../models/usuario.model';
import { GenericoService } from './generico.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericoService<Usuario, UsuarioRegistro> {

  constructor(http: HttpClient) { 
    super(http);
    this.endpoint = "rol";
  }

}
