import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { BuscarPQRDPipe } from '../../../../shared/pipes/buscar-pqrd.pipe';
import { RespuestaPQRD } from '../../../../core/models/RespuestaPqrd.model';
import { PqrdService } from '../../../../core/services/pqrd.service';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { NombreDeUsuarioPipe } from '../../../../shared/pipes/nombre-de-usuario.pipe';

@Component({
  selector: 'app-consultar-pqrd',
  standalone: true,
  imports: [
    BuscarPQRDPipe,
    TableModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    PaginatorModule,
    NombreDeUsuarioPipe
  ],
  templateUrl: './consultar-pqrd.component.html',
  styleUrls: ['./consultar-pqrd.component.css']
})
export class ConsultarPQRDComponent implements OnInit {
  listaPQRD: RespuestaPQRD[] = [];
  listaFiltradaPQRD: RespuestaPQRD[] = [];
  busqueda: string = '';
  estadoFiltro: string = 'Todos'; // Asegúrate de que el estadoFiltro tenga un valor por defecto
  estados = ['Todos', 'Pendiente', 'En Tramite', 'Anulado', 'Resuelto'];
  first = 0;
  rows = 10;

  constructor(
    private servicioPQRD: PqrdService,
    private servicioUsuario: UsuarioService,
    private cdr: ChangeDetectorRef,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.cargarTodosLosPQRD();
  }

  cargarTodosLosPQRD(): void {
    this.servicioPQRD.ListarTodos().subscribe({
      next: (resp: RespuestaPQRD[]) => {
        this.listaPQRD = resp;
        this.listaFiltradaPQRD = this.listaPQRD; // Inicialmente muestra todos
      }
    });
  }

  filtrarPQRD(): void {
    if (this.estadoFiltro === 'Todos') {
      this.listaFiltradaPQRD = this.listaPQRD;
    } else {
      this.listaFiltradaPQRD = this.listaPQRD.filter(pqrd => pqrd.estado === this.estadoFiltro);
    }
  }

  verDetallesPQRD(pqrd: RespuestaPQRD) {
    this.route.navigate(['/dashboard/datos-generales/pqrd/detalle-pqrd', pqrd.id]);
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
