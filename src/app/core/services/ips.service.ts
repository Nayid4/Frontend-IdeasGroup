import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { IPS, IPSRegistro } from '../models/ips.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpsService extends GenericoService<IPS, IPSRegistro> {

  private ipsUpdateSource = new BehaviorSubject<IPS | null>(null);
  ipsUpdated$ = this.ipsUpdateSource.asObservable();

  private ipsRegistroSource = new BehaviorSubject<IPSRegistro | null>(null);
  ipsRegistro$ = this.ipsRegistroSource.asObservable(); 

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "ips"
  }

  notifyIPSUpdate(ips: IPS) {
    this.ipsUpdateSource.next(ips);
  }

  notifyIPSRegistro(ips: IPSRegistro) {
    this.ipsRegistroSource.next(ips);
  }
  
}
