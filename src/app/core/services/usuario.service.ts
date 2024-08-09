import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Usuario, UsuarioRegistro } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericoService<Usuario, UsuarioRegistro> {

  private usuarioUpdateSource = new BehaviorSubject<Usuario | null>(null);
  usuarioUpdated$ = this.usuarioUpdateSource.asObservable();

  private usuarioRegistroSource = new BehaviorSubject<UsuarioRegistro | null>(null);
  usuarioRegistro$ = this.usuarioRegistroSource.asObservable();

  constructor(http: HttpClient) { 
    super(http);
    this.endpoint = "usuarios";
  }

  notifyUsuarioUpdate(usuario: Usuario) {
    this.usuarioUpdateSource.next(usuario);
  }

  notifyUsuarioRegistro(usuario: UsuarioRegistro) {
    this.usuarioRegistroSource.next(usuario);
  }
}
