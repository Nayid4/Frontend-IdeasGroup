import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EncabezadoComponent } from "../../../shared/components/encabezado/encabezado.component";

@Component({
  selector: 'app-usuario-layout',
  standalone: true,
  imports: [RouterModule, EncabezadoComponent],
  templateUrl: './usuario-layout.component.html',
  styleUrl: './usuario-layout.component.css'
})
export class UsuarioLayoutComponent {

}
