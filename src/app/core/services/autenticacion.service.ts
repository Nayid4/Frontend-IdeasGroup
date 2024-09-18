import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { DatosUsuario } from '../models/datosUsuario.model';
import { InicioSesion } from '../models/inicioSesion.model';
import { TokenUser } from '../models/token.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly TOKEN_NAME = 'token';
  private readonly apiUrl = environment.apiUrlBase;
  private readonly endpoint = 'autenticacion';
  private autenticadoSubject = new BehaviorSubject<boolean>(!!this.token);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  get token(): string | null {
    return this.cookieService.get(this.TOKEN_NAME);
  }

  set token(valor: string) {
    this.cookieService.set(this.TOKEN_NAME, valor);
    this.autenticadoSubject.next(!!valor);
  }

  get autenticado$() {
    return this.autenticadoSubject.asObservable();
  }

  IniciarSesion(datos: InicioSesion): Observable<TokenUser> {
    return this.http.post<TokenUser>(`${this.apiUrl}/${this.endpoint}/iniciar-sesion`, datos).pipe(
      tap(resp => {
        this.token = resp.token;
      })
    );
  }

  DatosUsuario(): Observable<DatosUsuario> {
    return this.http.get<DatosUsuario>(`${this.apiUrl}/${this.endpoint}/datos-usuario`);
  }

  cerrarSesion() {
    this.cookieService.delete(this.TOKEN_NAME);
    this.autenticadoSubject.next(false);
  }
}
