import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { EAPB, EAPBRegistro } from '../models/eapb.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EapbService extends GenericoService<EAPB, EAPBRegistro> {

  private eapbUpdateSource = new BehaviorSubject<EAPB | null>(null);
  eapbUpdated$ = this.eapbUpdateSource.asObservable();

  private eapbRegistroSource = new BehaviorSubject<EAPBRegistro | null>(null);
  eapbRegistro$ = this.eapbUpdateSource.asObservable();

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "eapb"
  }

  notifyEAPBUpdate(eapb: EAPB) {
    this.eapbUpdateSource.next(eapb);
  }

  notifyEAPBRegistro(eapb: EAPBRegistro) {
    this.eapbRegistroSource.next(eapb);
  }
}
