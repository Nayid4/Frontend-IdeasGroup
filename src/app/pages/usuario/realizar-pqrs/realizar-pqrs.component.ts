import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { TabView, TabViewModule } from 'primeng/tabview';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormularioUsuarioAfectadoComponent } from '../../administrador/PQRS/registrar-pqrd/formulario-usuario-afectado/formulario-usuario-afectado.component';
import { FormularioCategorizacionDeVulnerabilidadComponent } from '../../administrador/PQRS/registrar-pqrd/formulario-categorizacion-de-vulnerabilidad/formulario-categorizacion-de-vulnerabilidad.component';
import { FormularioAspectoGeneralComponent } from '../../administrador/PQRS/registrar-pqrd/formulario-aspecto-general/formulario-aspecto-general.component';
import { FormularioTramitesInstitucionalesComponent } from '../../administrador/PQRS/registrar-pqrd/formulario-tramites-institucionales/formulario-tramites-institucionales.component';
import { PqrdService } from '../../../core/services/pqrd.service';
import { RespuestaAspectoGeneralDePQRD, RespuestaPQRD, RespuestaUsuarioAfectado, RespuestaVulnerabilidadPQRD } from '../../../core/models/RespuestaPqrd.model';
import { ComandoCrearAspectoGeneralDePQRD, ComandoCrearPQRD, ComandoCrearUsuarioAfectado, ComandoCrearVulnerabilidadPQRD } from '../../../core/models/ComandoPqrd.model';

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
  @ViewChild('tabView') tabView!: TabView;
    
    opciones: { titulo: string }[] = [];
    currentIndex: number = 0; // Índice del tab actual
    id: string | null = null;
    formularioBasico!: FormGroup;
    respuestaPQRD: RespuestaPQRD | null = null

    usuarioNormal: boolean = true
    entidadTerritorial: string = ""

    // Datos para cada sección del formulario
    usuarioAfectado: RespuestaUsuarioAfectado | ComandoCrearUsuarioAfectado | null = null;
    vulnerabilidad: RespuestaVulnerabilidadPQRD | ComandoCrearVulnerabilidadPQRD | null = null;
    aspectoGeneral: ComandoCrearAspectoGeneralDePQRD | RespuestaAspectoGeneralDePQRD | null = null;
  
    constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private pqrdService: PqrdService,
      private router: Router,
      private messageService: MessageService,
      private cdRef: ChangeDetectorRef // Inyectar ChangeDetectorRef
    ) {}
  
    ngOnInit() {
      this.opciones = [
        { titulo: 'Identificación del Usuario Afectado' },
        { titulo: 'Caracterización de Vulnerabilidad' },
        { titulo: 'Aspectos Generales de PQRD' },
        { titulo: 'Trámites Institucionales' }
      ];
  
    }
  

    agregarEntidadTerritorial(event: string){
      this.entidadTerritorial = event
    }

    // Método que maneja la recepción de datos desde los componentes hijos
    onFormularioUsuarioAfectadoSubmit(event: RespuestaUsuarioAfectado | ComandoCrearUsuarioAfectado) {
      this.usuarioAfectado = event;
      console.log("Afevtado pqrd: ",this.usuarioAfectado)
      this.siguienteTab();
    }

    // Método que maneja la recepción de datos desde los componentes hijos
    onFormularioVulnerabilidadSubmit(event: RespuestaVulnerabilidadPQRD | ComandoCrearVulnerabilidadPQRD) {
      this.vulnerabilidad = event;
      console.log("vulnerabilidad pqrd: ",this.vulnerabilidad)
      this.siguienteTab();
    }

    // Método que maneja la recepción de datos desde los componentes hijos
    onFormularioAspectpGeneralSubmit(event: ComandoCrearAspectoGeneralDePQRD | RespuestaAspectoGeneralDePQRD) {
      this.aspectoGeneral = event;
      console.log("aspecto general pqrd: ",this.aspectoGeneral)
      this.registrar();
    }
  
    // Lógica para ir al siguiente tab
    siguienteTab() {
      if (this.validarTabActual()) {
        this.currentIndex++;
        this.tabView.activeIndex = this.currentIndex;
        this.cdRef.detectChanges(); // Forzar la detección de cambios
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor complete los campos obligatorios.' });
      }
    }
  
    // Lógica para regresar al tab anterior
    anteriorTab() {
      this.currentIndex--;
      this.tabView.activeIndex = this.currentIndex;
    }
  
    // Validar los formularios de cada tab antes de avanzar
    validarTabActual(): boolean {
      switch (this.currentIndex) {
        case 0:
          return this.usuarioAfectado != null;
        case 1:
          return this.vulnerabilidad != null;
        case 2:
          return this.aspectoGeneral != null;
        default:
          return true;
      }
    }
  
    registrar() {
      if (this.validarTabActual()) {
        const pqrd: ComandoCrearPQRD = {
          codigoRadicacion: "2000-3045",
          entidadTerritorial: this.entidadTerritorial,
          usuarioAfectado: this.usuarioAfectado!,
          vulnerabilidadPQRD: this.vulnerabilidad!,
          aspectoGeneralDePQRD: this.aspectoGeneral!,
          tramiteInstitucional: {
            seguimientos: [],
            estado: 'Activo'
          },
          estado: 'Pendiente'
        };
        
        this.pqrdService.Crear(pqrd).subscribe({
          next: (response) => {
            this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'PQRD registrada exitosamente.' });
            this.router.navigate(['/pqrd']);
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo registrar la PQRD.' });
          }
        });
      }
    }
  
    

}
