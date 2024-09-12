import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuLateralComponent } from "../../../shared/components/menu-lateral/menu-lateral.component";
import { EncabezadoUsuarioComponent } from "../../../shared/components/encabezado-usuario/encabezado-usuario.component";
import { CommonModule } from '@angular/common';
import { AutenticacionService } from '../../../core/services/autenticacion.service';

@Component({
  selector: 'app-administrador-layout',
  standalone: true,
  imports: [
    RouterModule, 
    MenuLateralComponent, 
    EncabezadoUsuarioComponent,
    CommonModule
  ],
  templateUrl: './administrador-layout.component.html',
  styleUrls: ['./administrador-layout.component.css']
})
export class AdministradorLayoutComponent implements OnInit {

  isMenuVisible: boolean = false;

  constructor(
    private autenticacionServicio: AutenticacionService,
    private router: Router,
  ){}

  ngOnInit(): void {
    if (this.autenticacionServicio.token) {
      this.autenticacionServicio.DatosUsuario().subscribe({
        error: () => {
          this.autenticacionServicio.cerrarSesion();
          this.router.navigate(['/inicio']);
        }
      });
    }
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
