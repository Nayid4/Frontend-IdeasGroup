import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from "../../../shared/components/menu-lateral/menu-lateral.component";
import { EncabezadoUsuarioComponent } from "../../../shared/components/encabezado-usuario/encabezado-usuario.component";
import { CommonModule } from '@angular/common';

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
export class AdministradorLayoutComponent {
  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
