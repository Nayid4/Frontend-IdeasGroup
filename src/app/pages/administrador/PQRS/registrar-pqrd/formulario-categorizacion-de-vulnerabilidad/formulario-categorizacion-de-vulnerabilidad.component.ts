import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VulnerabilidadPQRD } from '../../../../../core/models/Pqrd.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComandoCrearVulnerabilidadPQRD } from '../../../../../core/models/ComandoPqrd.model';
import { RespuestaVulnerabilidadPQRD } from '../../../../../core/models/RespuestaPqrd.model';

@Component({
  selector: 'app-formulario-categorizacion-de-vulnerabilidad',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-categorizacion-de-vulnerabilidad.component.html',
  styleUrl: './formulario-categorizacion-de-vulnerabilidad.component.css'
})
export class FormularioCategorizacionDeVulnerabilidadComponent {
  @Input() idVulnerabilidad!: RespuestaVulnerabilidadPQRD | null;
  @Output() vulnerabilidadEmitida = new EventEmitter<RespuestaVulnerabilidadPQRD | ComandoCrearVulnerabilidadPQRD>();
  
  formularioVulnerabilidad!: FormGroup;

  vulnerabilidadOptions = [
    { controlName: 'afrodescendiente', label: 'Afrodescendiente' },
    { controlName: 'madreGestante', label: 'Madre Gestante' },
    { controlName: 'habitanteDeCalle', label: 'Habitante de Calle' },
    { controlName: 'poblacionLGBTI', label: 'Población LGBTI' },
    { controlName: 'poblacionIndigena', label: 'Población Indígena' },
    { controlName: 'poblacionROM', label: 'Población ROM' },
    { controlName: 'victimaDelConflictoArmado', label: 'Víctima del Conflicto Armado' },
    { controlName: 'personaEnProstitucion', label: 'Persona en Prostitución' },
    { controlName: 'personaEnCondicionDeAbandono', label: 'Persona en Condición de Abandono' },
    { controlName: 'personaConDiscapacidad', label: 'Persona con Discapacidad' },
    { controlName: 'personaConEnfermedadMental', label: 'Persona con Enfermedad Mental' },
    { controlName: 'personaDeEspecialProteccion', label: 'Persona de Especial Protección' },
    { controlName: 'personaConEnfermedadHuerfana', label: 'Persona con Enfermedad Huérfana' },
    { controlName: 'personaConEnfermedadCatastrofica', label: 'Persona con Enfermedad Catastrófica' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cargarFormulario();
    if (this.idVulnerabilidad) {
      this.formularioVulnerabilidad.patchValue(this.idVulnerabilidad);
    }
  }

  cargarFormulario(): void {
    this.formularioVulnerabilidad = this.fb.group({
      afrodescendiente: [false],
      madreGestante: [false],
      habitanteDeCalle: [false],
      poblacionLGBTI: [false],
      poblacionIndigena: [false],
      poblacionROM: [false],
      victimaDelConflictoArmado: [false],
      personaEnProstitucion: [false],
      personaEnCondicionDeAbandono: [false],
      personaConDiscapacidad: [false],
      personaConEnfermedadMental: [false],
      personaDeEspecialProteccion: [false],
      personaConEnfermedadHuerfana: [false],
      personaConEnfermedadCatastrofica: [false],
      estado: ['Activo']
    });
  }

  onSubmit(): void {
    if (this.formularioVulnerabilidad.valid) {
      const datosFormulario = this.formularioVulnerabilidad.value;
      let datosEmitidos: RespuestaVulnerabilidadPQRD | ComandoCrearVulnerabilidadPQRD;

      if (this.idVulnerabilidad) {
        // Updating existing Vulnerabilidad
        datosEmitidos = {
          ...datosFormulario,
          id: this.idVulnerabilidad.id, // Ensure the id is included if updating
          fechaCreacion: this.idVulnerabilidad.fechaCreacion,
          fechaActualizacion: new Date(), // Or another appropriate value
        } as RespuestaVulnerabilidadPQRD;
      } else {
        // Creating new Vulnerabilidad
        datosEmitidos = {
          ...datosFormulario,
          estado: 'Activo' // Ensure the estado is set appropriately
        } as ComandoCrearVulnerabilidadPQRD;

        console.log("Vulneraibilidad: ",datosEmitidos);
      }

      this.vulnerabilidadEmitida.emit(datosEmitidos);
      this.messageService.add({severity:'success', summary:'Éxito', detail:'Vulnerabilidad registrada exitosamente'});
      //this.router.navigate(['/ruta-destino']); // Cambia a la ruta deseada
    }
  }
}
