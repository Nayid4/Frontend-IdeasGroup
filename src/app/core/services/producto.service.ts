import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { Producto, ProductoRegistro } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends GenericoService<Producto, ProductoRegistro> {

  constructor(http: HttpClient) { 
    super(http);
    this.endpoint = "producto";
  }

}
