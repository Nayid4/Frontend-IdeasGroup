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

@Component({
  selector: 'app-lista-usuario',
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
    BuscarUsuarioPipe
  ],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent implements OnInit {

  listaUsuarios: Usuario[] = [];

  busqueda: string = '';

  first = 0;

  rows = 10;

  constructor(
    private servicioUsuario: UsuarioService, 
    private cdr: ChangeDetectorRef, 
    private route: Router
  ) {}

  ngOnInit(): void {
    this.servicioUsuario.ListarTodos().subscribe({
      next: (resp: Usuario[]) => {
        this.listaUsuarios = resp;
      }
    });

    this.servicioUsuario.Updated$.subscribe((updatedUsuario) => {
      if (updatedUsuario) {
        this.servicioUsuario.ListarTodos().subscribe((resp: Usuario[]) => {
          this.listaUsuarios = resp;
        });
      }
    });

    this.servicioUsuario.Registro$.subscribe((registroUsuario) => {
      if (registroUsuario) {
        this.servicioUsuario.ListarTodos().subscribe((resp: Usuario[]) => {
          this.listaUsuarios = resp;
        });
      }
    });
  }

  cambiarEstado(usuario: Usuario) {
    let estado = {
      id: usuario.id,
      estado: usuario.estado === 'Activo' ? 'Inactivo' : 'Activo'
    };

    this.servicioUsuario.CambiarEstado(usuario.id, estado).subscribe({
      next: () => {
        usuario.estado = estado.estado;
        this.cdr.detectChanges();
      }
    });
  }

  actualizarUsuario(usuario: Usuario) {
    this.route.navigate(['/dashboard/parametros/usuario/actualizar-usuario', usuario.id]);
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
    return this.listaUsuarios ? this.first === this.listaUsuarios.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.listaUsuarios ? this.first === 0 : true;
  }
}
