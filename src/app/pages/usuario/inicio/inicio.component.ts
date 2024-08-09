import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Opcion } from '../../../core/models/listaOpciones.model';
import { TajertaOpcionComponent } from '../../../shared/components/tajerta-opcion/tajerta-opcion.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ButtonModule, TajertaOpcionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  listaOpciones: Opcion[] = [
    {
      id: 1,
      titulo: "Consultas",
      icono: "pi pi-search",
      ruta: "/inicio/consultar-pqrs",
      descripcion: "Consulta el estado de tú PQRD"
    },
    {
      id: 2,
      titulo: "PQR'S",
      icono: "pi pi-pen-to-square",
      ruta: "/inicio/realizar-pqrs",
      descripcion: "Registre usted mismo su queja o petición",
    }
  ]
}
