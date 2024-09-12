import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { TabView, TabViewModule } from 'primeng/tabview';
import { FormularioUsuarioAfectadoComponent } from '../formulario-usuario-afectado/formulario-usuario-afectado.component';
import { FormularioCategorizacionDeVulnerabilidadComponent } from '../formulario-categorizacion-de-vulnerabilidad/formulario-categorizacion-de-vulnerabilidad.component';
import { FormularioAspectoGeneralComponent } from '../formulario-aspecto-general/formulario-aspecto-general.component';
import { FormularioTramitesInstitucionalesComponent } from '../formulario-tramites-institucionales/formulario-tramites-institucionales.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PqrdService } from '../../../../../core/services/pqrd.service';
import { RespuestaAspectoGeneralDePQRD, RespuestaPQRD, RespuestaUsuarioAfectado, RespuestaVulnerabilidadPQRD } from '../../../../../core/models/RespuestaPqrd.model';
import { ComandoCrearAspectoGeneralDePQRD, ComandoCrearPQRD, ComandoCrearSeguimiento, ComandoCrearUsuarioAfectado, ComandoCrearVulnerabilidadPQRD } from '../../../../../core/models/ComandoPqrd.model';
import { AutenticacionService } from '../../../../../core/services/autenticacion.service';
import { DatosUsuario } from '../../../../../core/models/datosUsuario.model';
import { ComandoActualizarAspectoGeneralDePQRD, ComandoActualizarPQRD, ComandoActualizarUsuarioAfectado, ComandoActualizarVulnerabilidadPQRD } from '../../../../../core/models/actualizarPqrd.model';


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
export class FormularioPqrdComponent implements OnInit {
    @ViewChild('tabView') tabView!: TabView;
    
    opciones: { titulo: string }[] = [];
    currentIndex: number = 0; // Índice del tab actual
    id: string | null = null;
    usuario!: DatosUsuario;
    formularioBasico!: FormGroup;
    respuestaPQRD: RespuestaPQRD | null = null

    // Datos para cada sección del formulario
    usuarioAfectado: ComandoActualizarUsuarioAfectado | ComandoCrearUsuarioAfectado | null = null;
    vulnerabilidad: ComandoActualizarVulnerabilidadPQRD | ComandoCrearVulnerabilidadPQRD | null = null;
    aspectoGeneral: ComandoActualizarAspectoGeneralDePQRD | ComandoCrearAspectoGeneralDePQRD | null = null;
  
    constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private pqrdService: PqrdService,
      private router: Router,
      private servicioAutenticacion: AutenticacionService,
      private messageService: MessageService,
      private cdRef: ChangeDetectorRef // Inyectar ChangeDetectorRef
    ) {}
  
    ngOnInit() {
      this.cargarFormularioBasico();


      this.servicioAutenticacion.DatosUsuario().subscribe({
        next:(resp) => {
          this.usuario = resp
          console.log(resp)
          this.cargarFormularioBasico();
        }
      });

      this.opciones = [
        { titulo: 'Identificación del Usuario Afectado' },
        { titulo: 'Caracterización de Vulnerabilidad' },
        { titulo: 'Aspectos Generales de PQRD' },
        { titulo: 'Trámites Institucionales' }
      ];
  
  
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        // Lógica para cargar la PQRD si está en modo actualización
        this.cargarPQRD();
      }
    }
  
    cargarFormularioBasico() {
      const hoy = new Date().toISOString().split('T')[0]; // Formato yyyy-MM-dd
    
      // Generar un número aleatorio de 4 dígitos
      const generarCodigoRadicado = () => {
        const numeroAleatorio = Math.floor(1000 + Math.random() * 9000); // Número de 4 dígitos
        return `20000-${numeroAleatorio}`;
      };
    
      this.formularioBasico = this.fb.group({
        entidadTerritorial: [{ value: this.usuario?.entidadTerritorial || '', disabled: true }], // Evitar posible null
        fechaPQRD: [{ value: hoy, disabled: true }], // Fecha actual
        codigoRadicacion: [{ value: generarCodigoRadicado(), disabled: true }] // Generar código de radicado aleatorio
      });
    }
    

    // Método que maneja la recepción de datos desde los componentes hijos
    onFormularioUsuarioAfectadoSubmit(event: RespuestaUsuarioAfectado | ComandoCrearUsuarioAfectado) {
      this.usuarioAfectado = event;
      console.log("Afectado pqrd: ",this.usuarioAfectado)
      this.siguienteTab();
    }

    // Método que maneja la recepción de datos desde los componentes hijos
    onFormularioVulnerabilidadSubmit(event: RespuestaVulnerabilidadPQRD | ComandoCrearVulnerabilidadPQRD) {
      this.vulnerabilidad = event;
      console.log("vulnerabilidad pqrd: ",this.vulnerabilidad)
      this.siguienteTab();
    }

    // Método que maneja la recepción de datos desde los componentes hijos
    onFormularioAspectpGeneralSubmit(event: ComandoCrearAspectoGeneralDePQRD | ComandoActualizarAspectoGeneralDePQRD) {
      this.aspectoGeneral = event;
      console.log("aspecto general pqrd: ",this.aspectoGeneral)
      this.registrar();
    }

    // Método que maneja la recepción de datos desde los componentes hijos
    AgregarSeguimiento(event: ComandoCrearSeguimiento) {
      
      console.log("Seguimiento: ",event)
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
        const datosFormulario = this.formularioBasico.value;

        if(this.id){
          const pqrd: ComandoActualizarPQRD = {
            id: this.id,
            codigoRadicacion: datosFormulario.codigoRadicacion,
            entidadTerritorial: datosFormulario.entidadTerritorial,
            usuarioAfectado: this.usuarioAfectado as ComandoActualizarUsuarioAfectado,
            vulnerabilidadPQRD: this.vulnerabilidad as ComandoActualizarVulnerabilidadPQRD,
            aspectoGeneralDePQRD: this.aspectoGeneral as ComandoActualizarAspectoGeneralDePQRD,
            estado: this.respuestaPQRD!.estado
          };

          console.log("PQRD Actualizada: ", pqrd)
          
          this.pqrdService.ActualizarPQRD(this.id,pqrd).subscribe({
            next: (response) => {
              this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'PQRD actualizada exitosamente.' });
              this.router.navigate(['/pqrd']);
            },
            error: (err) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualiazada la PQRD.' });
            }
          });
        }else{
          const pqrd: ComandoCrearPQRD = {
            codigoRadicacion: datosFormulario.codigoRadicacion,
            entidadTerritorial: datosFormulario.entidadTerritorial,
            usuarioAfectado: this.usuarioAfectado!,
            vulnerabilidadPQRD: this.vulnerabilidad!,
            aspectoGeneralDePQRD: this.aspectoGeneral as ComandoCrearAspectoGeneralDePQRD,
            tramiteInstitucional: {
              seguimientos: [],
              estado: 'Activo'
            },
            estado: 'Pendiente'
          };

          console.log("PQRD Registrada: ", pqrd)
          
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
  
    // Cargar los datos de una PQRD para actualizar
    cargarPQRD() {
      this.pqrdService.ListarPorId(this.id!).subscribe({
        next: (respuesta: RespuestaPQRD) => {
          // Aquí puedes cargar los datos en el formulario
          this.respuestaPQRD = respuesta
          this.formularioBasico.patchValue(respuesta);
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar la PQRD.' });
        }
      });
    }
}
