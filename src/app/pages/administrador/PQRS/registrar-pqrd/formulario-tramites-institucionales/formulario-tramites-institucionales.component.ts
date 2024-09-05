import { Component, Input, OnInit } from '@angular/core';
import { Seguimiento, TramiteInstitucional } from '../../../../../core/models/Pqrd.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticacionService } from '../../../../../core/services/autenticacion.service';
import { DatosUsuario } from '../../../../../core/models/datosUsuario.model';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-formulario-tramites-institucionales',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule
  ],
  templateUrl: './formulario-tramites-institucionales.component.html',
  styleUrl: './formulario-tramites-institucionales.component.css'
})
export class FormularioTramitesInstitucionalesComponent implements OnInit {
  @Input() tramiteInstitucional!: TramiteInstitucional | null;
  formularioTramiteInstitucional!: FormGroup;
  listaSeguimientos: Seguimiento[] = [];
  datosUsuario!: DatosUsuario;

  first = 0;

  rows = 10;

  tiposDeSeguimientos: { id: number, tipo: string }[] = [
    { id: 1, tipo: "Gestión Y Seguimiento" },
    { id: 2, tipo: "Transferencia de Asunto" },
    { id: 3, tipo: "Respuesta al Usuario" },
    { id: 4, tipo: "Solución Final" },
    { id: 5, tipo: "Anular" }
  ];

  constructor(
    private fb: FormBuilder,
    private autenticacionService: AutenticacionService
  ) {}

  ngOnInit(): void {
    if(this.tramiteInstitucional){
      this.listaSeguimientos = this.tramiteInstitucional.seguimientos
    }

    this.cargarFormulario('');
    this.autenticacionService.DatosUsuario().subscribe({
      next: (resp) => {
        this.datosUsuario = resp;
        console.log(resp)
        this.cargarFormulario(resp.nombre); // Cargar el formulario después de obtener los datos del usuario
      },
      error: (err) => {
        console.error('Error al obtener los datos del usuario', err);
      }
    });
  }

  cargarFormulario(nombre: string): void {
    const hoy = new Date().toISOString().split('T')[0]; // Formato yyyy-MM-dd

    this.formularioTramiteInstitucional = this.fb.group({
      tipoSeguimiento: ['', Validators.required],
      idUsuario: [{ value: nombre, disabled: true }, Validators.required], // Deshabilitar campo idUsuario
      transferidoA: [''],
      observacion: [''],
      fechaSeguimiento: [{ value: hoy, disabled: true }], // Fecha actual
      estado: ['Activo']
    });
  }

  onSubmit(): void {
    if (this.formularioTramiteInstitucional.valid) {
      const formData = this.formularioTramiteInstitucional.value;
      console.log('Formulario enviado:', formData);
      // Aquí puedes llamar a un servicio para enviar los datos al backend
    } else {
      console.log('Formulario inválido');
    }
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.listaSeguimientos ? this.first === this.listaSeguimientos.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.listaSeguimientos ? this.first === 0 : true;
  }
}