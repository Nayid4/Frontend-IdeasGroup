import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AutenticacionService } from '../../../core/services/autenticacion.service';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-encabezado-usuario',
  standalone: true,
  imports: [
    BreadcrumbModule, 
    RouterModule,
    AvatarModule,
    MenubarModule,
    MenuModule,
    ButtonModule
  ],
  templateUrl: './encabezado-usuario.component.html',
  styleUrl: './encabezado-usuario.component.css'
})
export class EncabezadoUsuarioComponent implements OnInit{
  
  @Output() toggleMenu = new EventEmitter<void>();

  
  nombre: string = ""

  items!: MenuItem[];

  inicial: string = 'A'

  constructor(private servicioAute: AutenticacionService, private router: Router) {
    
  }

  ngOnInit() {
    this.servicioAute.DatosUsuario().subscribe({
      next: (resp) => {
        this.inicial = resp.nombres[0]
        this.nombre = resp.nombres
      }
    })

    this.items = [
      {
        label: 'Cambiar Contraseña',
        command: () => {}
      },
      {
        label: 'Cerrar Sesión',
        command: () => {
          this.servicioAute.cerrarSesion()
          this.router.navigate(['/inicio'])
        }
      }
  ];
  }

  AccionMenu(estado: boolean){

  }
  
}
