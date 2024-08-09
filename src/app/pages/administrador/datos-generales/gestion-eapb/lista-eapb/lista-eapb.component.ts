import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EapbService } from '../../../../../core/services/eapb.service';
import { EAPB } from '../../../../../core/models/eapb.model';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { Estado } from '../../../../../core/models/estado.model';
import { BuscarEAPBPipe } from '../../../../../shared/pipes/buscar-eapb.pipe';

@Component({
  selector: 'app-lista-eapb',
  standalone: true,
  imports: [
    TableModule, 
    CommonModule, 
    ButtonModule, 
    RouterModule, 
    InputIconModule, 
    IconFieldModule, 
    InputTextModule,
    PaginatorModule,
    BuscarEAPBPipe
  ],
  templateUrl: './lista-eapb.component.html',
  styleUrl: './lista-eapb.component.css'
})
export class ListaEAPBComponent implements OnInit{

  listaEAPB: EAPB[] = []

  busqueda: string = '';

  first = 0;

  rows = 10;


  constructor(private servicioEAPB: EapbService, private cdr: ChangeDetectorRef, private route: Router){}

  ngOnInit(): void {
    this.servicioEAPB.ListarTodos().subscribe({
      next: (resp: EAPB[]) => {
        this.listaEAPB = resp
      }
    })

    this.servicioEAPB.eapbUpdated$.subscribe((updatedEAPB) => {
      if (updatedEAPB) {
        // Aquí puedes actualizar tu lista o volver a llamar a ListarTodos para obtener la lista actualizada
        this.servicioEAPB.ListarTodos().subscribe((resp: EAPB[]) => {
          this.listaEAPB = resp;
        });
      }
    });

    this.servicioEAPB.eapbRegistro$.subscribe((registroEAPB) => {
      if (registroEAPB) {
        // Aquí puedes actualizar tu lista o volver a llamar a ListarTodos para obtener la lista actualizada
        this.servicioEAPB.ListarTodos().subscribe((resp: EAPB[]) => {
          this.listaEAPB = resp;
        });
      }
    });
  }

  cambiarEstado(eapb: EAPB){
    
    let estado: Estado = {
      id: eapb.id,
      estado: eapb.estado
    }

    if(eapb.estado == 'Activo'){
      estado.estado = "Inactivo"
    }else{
      estado.estado = "Activo"
    }

    this.servicioEAPB.CambiarEstado(eapb.id, estado).subscribe({
      next: () => {
        eapb.estado = estado.estado;
        this.cdr.detectChanges();  // Forzar la detección de cambios
      }
    });
  }

  actualizarEAPB(eapb: EAPB){
    this.route.navigate(['/dashboard/datos-generales/eapb/actualizar-eapb', eapb.id])
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
      return this.listaEAPB ? this.first === this.listaEAPB.length - this.rows : true;
  }

  isFirstPage(): boolean {
      return this.listaEAPB ? this.first === 0 : true;
  }

}
