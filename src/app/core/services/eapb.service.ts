import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { EAPB, EAPBRegistro } from '../models/eapb.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EapbService extends GenericoService<EAPB, EAPBRegistro> {

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "eapb"
  }

}
