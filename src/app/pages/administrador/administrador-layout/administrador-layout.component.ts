import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from "../../../shared/components/menu-lateral/menu-lateral.component";
import { EncabezadoUsuarioComponent } from "../../../shared/components/encabezado-usuario/encabezado-usuario.component";

@Component({
  selector: 'app-administrador-layout',
  standalone: true,
  imports: [
    RouterModule, 
    MenuLateralComponent, 
    EncabezadoUsuarioComponent
  ],
  templateUrl: './administrador-layout.component.html',
  styleUrl: './administrador-layout.component.css'
})
export class AdministradorLayoutComponent {

}
