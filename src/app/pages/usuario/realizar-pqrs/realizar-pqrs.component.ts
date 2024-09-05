import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormularioUsuarioAfectadoComponent } from '../../administrador/PQRS/registrar-pqrd/formulario-usuario-afectado/formulario-usuario-afectado.component';
import { FormularioCategorizacionDeVulnerabilidadComponent } from '../../administrador/PQRS/registrar-pqrd/formulario-categorizacion-de-vulnerabilidad/formulario-categorizacion-de-vulnerabilidad.component';
import { FormularioAspectoGeneralComponent } from '../../administrador/PQRS/registrar-pqrd/formulario-aspecto-general/formulario-aspecto-general.component';
import { FormularioTramitesInstitucionalesComponent } from '../../administrador/PQRS/registrar-pqrd/formulario-tramites-institucionales/formulario-tramites-institucionales.component';
import { PqrdService } from '../../../core/services/pqrd.service';

@Component({
  selector: 'app-realizar-pqrs',
  standalone: true,
  imports: [
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    FormularioUsuarioAfectadoComponent,
    FormularioCategorizacionDeVulnerabilidadComponent,
    FormularioAspectoGeneralComponent,
    FormularioTramitesInstitucionalesComponent
  ],
  templateUrl: './realizar-pqrs.component.html',
  styleUrl: './realizar-pqrs.component.css'
})
export class RealizarPQRSComponent implements OnInit{
  opciones: { titulo: string }[] = [];
  formularioBasico!: FormGroup;
  isDisabled: boolean = true

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private pqrdService: PqrdService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.opciones = [
        { titulo: 'Identificación del Usuario Afectado'},
        { titulo: 'Caracterización de Vulnerabilidad'},
        { titulo: 'Aspectos Generales de PQRD'},
        { titulo: 'Tramites Institucionales'}
    ];

  }

}
