import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seguimiento, TramiteInstitucional } from '../../../../../core/models/Pqrd.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticacionService } from '../../../../../core/services/autenticacion.service';
import { DatosUsuario } from '../../../../../core/models/datosUsuario.model';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { RespuestaSeguimiento, RespuestaTramiteInstitucional } from '../../../../../core/models/RespuestaPqrd.model';
import { CommonModule } from '@angular/common';
import { ComandoCrearSeguimiento } from '../../../../../core/models/ComandoPqrd.model';
import { MessageService } from 'primeng/api';
import { NombreDeUsuarioPipe } from "../../../../../shared/pipes/nombre-de-usuario.pipe";


@Component({
  selector: 'app-formulario-tramites-institucionales',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
    CommonModule,
    NombreDeUsuarioPipe
],
  templateUrl: './formulario-tramites-institucionales.component.html',
  styleUrl: './formulario-tramites-institucionales.component.css'
})
export class FormularioTramitesInstitucionalesComponent implements OnInit {
  @Input() tramiteInstitucional!: RespuestaTramiteInstitucional | null;
  @Output() seguimiento = new EventEmitter<ComandoCrearSeguimiento>();


  formularioTramiteInstitucional!: FormGroup;
  listaSeguimientos: RespuestaSeguimiento[] = [];
  datosUsuario!: DatosUsuario;

  first = 0;

  rows = 10;

  tiposDeSeguimientos: { id: number, tipo: string }[] = [
    { id: 1, tipo: "Gestion Y Seguimiento" },
    { id: 2, tipo: "Transferencia de Asunto" },
    { id: 3, tipo: "Respuesta al Usuario" },
    { id: 4, tipo: "Solución Final" },
    { id: 5, tipo: "Anular" }
  ];

  constructor(
    private fb: FormBuilder,
    private autenticacionService: AutenticacionService,
    private messageService: MessageService,
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
      observacion: ['', Validators.required],
      fechaSeguimiento: [{ value: hoy, disabled: true }], // Fecha actual
      estado: ['Activo']
    });
  }

  onSubmit(): void {
    console.log("Seguimiento: ",this.formularioTramiteInstitucional.value)
    if (this.formularioTramiteInstitucional.valid) {
      const datosFomulario = this.formularioTramiteInstitucional.value;
      
      // Aquí puedes llamar a un servicio para enviar los datos al backend
      
      const seguimiento: ComandoCrearSeguimiento = {
        tipoSeguimiento: datosFomulario.tipoSeguimiento,
        idUsuario: this.datosUsuario.id,
        tranferidoA: datosFomulario.transferidoA,
        observacion: datosFomulario.observacion,
        estado: 'Activo'
      }

      this.seguimiento.emit(seguimiento)

      // Crear el nuevo objeto de seguimiento para agregar a la lista
    const nuevoSeguimiento: RespuestaSeguimiento = {
      id: this.listaSeguimientos.length + 1+"",  // Generar un ID temporal o según el backend
      tipoDeSeguimiento: seguimiento.tipoSeguimiento,
      idUsuario: seguimiento.idUsuario,  // O el valor que corresponda
      fechaCreacion: new Date(),  // O el formato correcto
      fechaActualizacion: new Date(),
      transferidoA: seguimiento.tranferidoA,
      observacion: datosFomulario.observacion,
      idTramiteInstitucional: this.tramiteInstitucional!.id,
      estado: "Activo"
    };

    // Agregar el nuevo seguimiento a la lista
    this.listaSeguimientos.push(nuevoSeguimiento);

      console.log('Formulario enviado:', seguimiento);
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Seguimiento registrado!!' });

    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Complete todos los campos!!' });
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