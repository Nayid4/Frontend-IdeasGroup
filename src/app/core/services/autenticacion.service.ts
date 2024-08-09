import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { DatosUsuario } from '../models/datosUsuario.model';
import { InicioSesion } from '../models/inicioSesion.model';
import { TokenUser } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly TOKEN_NAME = 'token'
  private readonly apiUrl = environment.apiUrlBase
  private readonly endpoint = 'autenticacion'

  constructor(private http: HttpClient, private cookiService: CookieService) { }

  get token(): string | null{

    return this.cookiService.get(this.TOKEN_NAME)
  }

  set token(valor: string){
   this.cookiService.set(this.TOKEN_NAME, valor)
  }

  IniciarSesion(datos: InicioSesion): Observable<TokenUser> {
    return this.http.post<TokenUser>(`${this.apiUrl}/${this.endpoint}/iniciar-sesion`, datos).pipe(
      tap(resp => {
        this.token = resp.token
      }));
  }

  DatosUsuario(): Observable<DatosUsuario> {
    return this.http.get<DatosUsuario>(`${this.apiUrl}/${this.endpoint}/datos-usuario`);
  }

  /*registrarse(datos: UsuarioRegistro): Observable<DatosUsuario> {
    return this.http.post<DatosUsuario>(`${this.apiUrl}/registrarse`, datos);
  }*/

  cerrarSesion(){
    //localStorage.removeItem(this.TOKEN_NAME)
    this.cookiService.delete(this.TOKEN_NAME)
  }
}
