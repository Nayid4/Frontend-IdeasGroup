import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { DatosUsuario } from '../models/datosUsuario.model';
import { InicioSesion } from '../models/inicioSesion.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly TOKEN_NAME = 'token'
  private readonly apiUrl = environment.apiUrlBase
  private readonly endPoint = "autenticacion"

  constructor(private http: HttpClient, private cookiService: CookieService) { }

  get token(): string | null{

    return this.cookiService.get(this.TOKEN_NAME)
  }

  set token(valor: string){
   this.cookiService.set(this.TOKEN_NAME, valor)
  }

  IniciarSesion(datos: InicioSesion): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/${this.endPoint}/iniciar-sesion`, datos).pipe(
              tap(response => {
                this.token = response
              })
            );
  }

  DatosUsuario(): Observable<DatosUsuario> {
    return this.http.get<DatosUsuario>(`${this.apiUrl}/${this.endPoint}/datos-usuario`);
  }

  /*registrarse(datos: UsuarioRegistro): Observable<DatosUsuario> {
    return this.http.post<DatosUsuario>(`${this.apiUrl}/registrarse`, datos);
  }*/

  cerrarSesion(){
    //localStorage.removeItem(this.TOKEN_NAME)
    this.cookiService.delete(this.TOKEN_NAME)
  }
}
