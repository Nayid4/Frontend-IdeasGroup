import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { FormularioUsuarioAfectadoComponent } from '../formulario-usuario-afectado/formulario-usuario-afectado.component';
import { FormularioCategorizacionDeVulnerabilidadComponent } from '../formulario-categorizacion-de-vulnerabilidad/formulario-categorizacion-de-vulnerabilidad.component';
import { FormularioAspectoGeneralComponent } from '../formulario-aspecto-general/formulario-aspecto-general.component';
import { FormularioTramitesInstitucionalesComponent } from '../formulario-tramites-institucionales/formulario-tramites-institucionales.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PqrdService } from '../../../../../core/services/pqrd.service';


@Component({
  selector: 'app-formulario-pqrd',
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
  templateUrl: './formulario-pqrd.component.html',
  styleUrl: './formulario-pqrd.component.css'
})
export class FormularioPqrdComponent implements OnInit{
  opciones: { titulo: string }[] = [];
  id: string | null = null;
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

    this.cargarFormularioBasico()

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      //this.cargarUsuario()
            
    }
  }

  cargarFormularioBasico() {
    const hoy = new Date().toISOString().split('T')[0]; // Formato yyyy-MM-dd
  
    this.formularioBasico = this.fb.group({
      EntidadTerritorial: [{ value: 'Cesar', disabled: true }],
      FechaPQRD: [{ value: hoy, disabled: true }], // Fecha actual
      codigoRadicacion: [{ value: '20000-2334', disabled: true }]
    });
  }
  

}
