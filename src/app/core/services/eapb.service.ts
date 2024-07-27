import { Injectable } from '@angular/core';
import { GenericoService } from './generico.service';
import { EAPB } from '../models/eapb.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EapbService extends GenericoService<EAPB> {

  constructor(http: HttpClient) { 
    super(http)
    this.endpoint = "eapb"
  }
}
