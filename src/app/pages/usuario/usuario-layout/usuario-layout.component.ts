import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EncabezadoComponent } from "../../../shared/components/encabezado/encabezado.component";
import { UsuarioService } from '../../../core/services/usuario.service';
import { AutenticacionService } from '../../../core/services/autenticacion.service';

@Component({
  selector: 'app-usuario-layout',
  standalone: true,
  imports: [RouterModule, EncabezadoComponent],
  templateUrl: './usuario-layout.component.html',
  styleUrl: './usuario-layout.component.css'
})
export class UsuarioLayoutComponent implements OnInit{

  constructor(private autenticacionServicio: AutenticacionService){}

  ngOnInit(): void {
    this.autenticacionServicio.DatosUsuario();
  }

}
