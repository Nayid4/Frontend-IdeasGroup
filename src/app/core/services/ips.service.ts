import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { IPS, IPSRegistro } from '../models/ips.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpsService extends GenericoService<IPS, IPSRegistro> {

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "ips"
  }
  
}
