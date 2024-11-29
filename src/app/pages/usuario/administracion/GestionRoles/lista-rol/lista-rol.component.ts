import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../../core/services/usuario.service';
import { Usuario } from '../../../../../core/models/usuario.model';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { BuscarUsuarioPipe } from '../../../../../shared/pipes/buscar-usuario.pipe';
import { RolService } from '../../../../../core/services/rol.service';
import { Rol } from '../../../../../core/models/rol.model';
import { BuscarRolPipe } from "../../../../../shared/pipes/buscar-rol.pipe";
import { SiONoPipe } from "../../../../../shared/pipes/si-ono.pipe";

@Component({
  selector: 'app-lista-rol',
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
    BuscarUsuarioPipe,
    BuscarRolPipe,
    SiONoPipe
],
  templateUrl: './lista-rol.component.html',
  styleUrl: './lista-rol.component.css'
})
export class ListaRolComponent implements OnInit {

  listaRoles: Rol[] = [];

  busqueda: string = '';

  first = 0;

  rows = 10;

  constructor(
    private rolServicio: RolService, 
    private cdr: ChangeDetectorRef, 
    private route: Router
  ) {}

  ngOnInit(): void {
    this.rolServicio.ListarTodos().subscribe({
      next: (resp: Rol[]) => {
        this.listaRoles = resp;
      }
    });

    this.rolServicio.Updated$.subscribe((updatedRol) => {
      if (updatedRol) {
        this.rolServicio.ListarTodos().subscribe((resp: Rol[]) => {
          this.listaRoles = resp;
        });
      }
    });

    this.rolServicio.Registro$.subscribe((registroRol) => {
      if (registroRol) {
        this.rolServicio.ListarTodos().subscribe((resp: Rol[]) => {
          this.listaRoles = resp;
        });
      }
    });
  }

  cambiarEstado(rol: Rol) {
    let estado = {
      id: rol.id,
      estado: rol.estado === 'Activo' ? 'Inactivo' : 'Activo'
    };

    this.rolServicio.CambiarEstado(rol.id, estado).subscribe({
      next: () => {
        rol.estado = estado.estado;
        this.cdr.detectChanges();
      }
    });
  }

  actualizarRol(rol: Rol) {
    this.route.navigate(['/dashboard/administracion/rol/actualizar-rol', rol.id]);
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
    return this.listaRoles ? this.first === this.listaRoles.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.listaRoles ? this.first === 0 : true;
  }
}

