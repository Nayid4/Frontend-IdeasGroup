import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { IPS } from '../../../../../core/models/ips.model';
import { IpsService } from '../../../../../core/services/ips.service';
import { BuscarIPSPipe } from "../../../../../shared/pipes/buscar-ips.pipe";

@Component({
  selector: 'app-lista-ips',
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
    BuscarEAPBPipe,
    BuscarIPSPipe
],
  templateUrl: './lista-ips.component.html',
  styleUrl: './lista-ips.component.css'
})
export class ListaIPSComponent {

  listaIPS: IPS[] = []

  busqueda: string = '';

  first = 0;

  rows = 10;


  constructor(private servicioIPS: IpsService, private cdr: ChangeDetectorRef, private route: Router){}

  ngOnInit(): void {
    this.servicioIPS.ListarTodos().subscribe({
      next: (resp: IPS[]) => {
        this.listaIPS = resp
      }
    })

    this.servicioIPS.ipsUpdated$.subscribe((updatedIPS) => {
      if (updatedIPS) {
        // Aquí puedes actualizar tu lista o volver a llamar a ListarTodos para obtener la lista actualizada
        this.servicioIPS.ListarTodos().subscribe((resp: IPS[]) => {
          this.listaIPS = resp;
        });
      }
    });

    this.servicioIPS.ipsRegistro$.subscribe((registroIPS) => {
      if (registroIPS) {
        // Aquí puedes actualizar tu lista o volver a llamar a ListarTodos para obtener la lista actualizada
        this.servicioIPS.ListarTodos().subscribe((resp: IPS[]) => {
          this.listaIPS = resp;
        });
      }
    });
  }

  cambiarEstado(ips: IPS){
    
    let estado: Estado = {
      id: ips.id,
      estado: ips.estado
    }

    if(ips.estado == 'Activo'){
      estado.estado = "Inactivo"
    }else{
      estado.estado = "Activo"
    }

    this.servicioIPS.CambiarEstado(ips.id, estado).subscribe({
      next: () => {
        ips.estado = estado.estado;
        this.cdr.detectChanges();  // Forzar la detección de cambios
      }
    });
  }

  actualizarIPS(ips: IPS){
    this.route.navigate(['/dashboard/datos-generales/ips/actualizar-ips', ips.id])
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
      return this.listaIPS ? this.first === this.listaIPS.length - this.rows : true;
  }

  isFirstPage(): boolean {
      return this.listaIPS ? this.first === 0 : true;
  }

}
