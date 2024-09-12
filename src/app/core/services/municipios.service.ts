import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpcionComboBox } from '../models/opcionComboBox.model';
import { Opcion } from '../models/listaOpciones.model';


@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  private jsonURL = 'assets/municipios.json';

  constructor(private http: HttpClient) { }

  ListarTodos(): Observable<OpcionComboBox[]> {
    return this.http.get<OpcionComboBox[]>(this.jsonURL);
  }
}
