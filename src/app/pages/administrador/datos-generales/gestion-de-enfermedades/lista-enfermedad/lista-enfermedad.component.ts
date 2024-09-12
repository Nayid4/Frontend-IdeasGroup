import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Enfermedad } from '../../../../../core/models/enfermedad.model';
import { EnfermedadService } from '../../../../../core/services/enfermedad.service';
import { Estado } from '../../../../../core/models/estado.model';
import { BuscarEnfermedadPipe } from "../../../../../shared/pipes/buscar-enfermedad.pipe";
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-lista-enfermedad',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BuscarEnfermedadPipe,
    TableModule,
    CommonModule,
    ButtonModule,
    RouterModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    PaginatorModule,
],
  templateUrl: './lista-enfermedad.component.html',
  styleUrl: './lista-enfermedad.component.css'
})
export class ListaEnfermedadComponent implements OnInit{
  listaEnfermedad: Enfermedad[] = []

  tipoEnfermedad: string | null = '';

  busqueda: string = '';

  first = 0;

  rows = 10;


  constructor(
    private route: ActivatedRoute,
    private servicioEnfermedad:EnfermedadService, 
    private cdr: ChangeDetectorRef, 
    private router: Router
  ){}

  ngOnInit(): void {
    // Obtener el tipo de enfermedad desde los parámetros de la ruta
    this.route.params.subscribe(params => {
      this.tipoEnfermedad = params['tipo'];

      console.log(params['tipo'])

      // Aquí puedes cargar las enfermedades según el tipo
      this.servicioEnfermedad.ListarPorTipo(this.tipoEnfermedad!).subscribe({
        next: (resp: Enfermedad[]) => {
          this.listaEnfermedad = resp;
        }
      });
    });

    this.servicioEnfermedad.Updated$.subscribe((updatedEnfermedad) => {
      if (updatedEnfermedad) {
        this.servicioEnfermedad.ListarPorTipo(this.tipoEnfermedad!).subscribe((resp: Enfermedad[]) => {
          this.listaEnfermedad = resp;
        });
      }
    });

    this.servicioEnfermedad.Registro$.subscribe((registroEnfermedad) => {
      if (registroEnfermedad) {
        this.servicioEnfermedad.ListarPorTipo(this.tipoEnfermedad!).subscribe((resp: Enfermedad[]) => {
          this.listaEnfermedad = resp;
        });
      }
    });
  }

  cambiarEstado(enfermedad: Enfermedad){
    
    let estado: Estado = {
      id: enfermedad.id,
      estado: enfermedad.estado
    }

    if(enfermedad.estado == 'Activo'){
      estado.estado = "Inactivo"
    }else{
      estado.estado = "Activo"
    }

    this.servicioEnfermedad.CambiarEstado(enfermedad.id, estado).subscribe({
      next: () => {
        enfermedad.estado = estado.estado;
        this.cdr.detectChanges();  // Forzar la detección de cambios
      }
    });
  }

  registrarEnfermedad() {
    console.log("Tipo de registro: ", this.tipoEnfermedad);
    this.router.navigate([`/dashboard/datos-generales/enfermedades/${this.tipoEnfermedad}/registrar-enfermedad/${this.tipoEnfermedad}`]);
  }

  actualizarEnfermedad(enfermedad: Enfermedad) {
    // Redirigir a la ruta de actualización según el tipo de enfermedad
    this.router.navigate([`/dashboard/datos-generales/enfermedades/${this.tipoEnfermedad}/actualizar-enfermedad/${this.tipoEnfermedad}/${enfermedad.id}`]);
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
      return this.listaEnfermedad ? this.first === this.listaEnfermedad.length - this.rows : true;
  }

  isFirstPage(): boolean {
      return this.listaEnfermedad ? this.first === 0 : true;
  }
}
