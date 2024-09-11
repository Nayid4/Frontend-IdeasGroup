import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RespuestaPQRD } from '../../../core/models/RespuestaPqrd.model';
import { PqrdService } from '../../../core/services/pqrd.service';
import { Router, RouterModule } from '@angular/router';
import { BuscarPQRDPipe } from "../../../shared/pipes/buscar-pqrd.pipe";
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-inicio-dashboard',
  standalone: true,
  imports: [
    BuscarPQRDPipe,
    TableModule,
    CommonModule,
    ButtonModule,
    RouterModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    PaginatorModule,
  ],
  templateUrl: './inicio-dashboard.component.html',
  styleUrl: './inicio-dashboard.component.css'
})
export class InicioDashboardComponent implements OnInit {
  listaPQRD: RespuestaPQRD[] = [];
  busqueda: string = '';
  first = 0;
  rows = 10;

  constructor(private servicioPQRD: PqrdService, private cdr: ChangeDetectorRef, private route: Router) {}

  ngOnInit(): void {
    this.servicioPQRD.ListarPorEstado('Pendiente' ).subscribe({
      next: (resp: RespuestaPQRD[]) => {
        this.listaPQRD = resp;
      }
    });

    // Suscripción para actualizar la lista si es necesario
    this.servicioPQRD.Updated$.subscribe((updatedPQRD) => {
      if (updatedPQRD) {
        this.servicioPQRD.ListarPorEstado('Pendiente' ).subscribe({
          next:(resp: RespuestaPQRD[]) => {
          this.listaPQRD = resp;
        }});
      }
    });
  }

  actualizarPQRD(pqrd: RespuestaPQRD) {
    this.route.navigate(['/dashboard/pqrd/editar-pqrd', pqrd.id]);
  }

  verDetallesPQRD(pqrd: RespuestaPQRD) {
    //this.route.navigate(['/dashboard/datos-generales/pqrd/detalle-pqrd', pqrd.id]);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.listaPQRD ? this.first === this.listaPQRD.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.listaPQRD ? this.first === 0 : true;
  }
}