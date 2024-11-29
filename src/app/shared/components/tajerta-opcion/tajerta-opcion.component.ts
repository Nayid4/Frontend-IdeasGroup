import { Component, Input } from '@angular/core';
import { Opcion } from '../../../core/models/listaOpciones.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tajerta-opcion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tajerta-opcion.component.html',
  styleUrl: './tajerta-opcion.component.css'
})
export class TajertaOpcionComponent {
  @Input() info!: Opcion



}
