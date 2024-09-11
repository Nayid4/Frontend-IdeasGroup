import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { PqrdService } from '../../../core/services/pqrd.service';
import { PQRD } from '../../../core/models/Pqrd.model';
import { MessageService } from 'primeng/api';
import { PQRDUsuario } from '../../../core/models/pqrdUsuario.model';
import { RespuestaPQRD } from '../../../core/models/RespuestaPqrd.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-consultar-pqrs',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
    CommonModule
  ],
  templateUrl: './consultar-pqrs.component.html',
  styleUrl: './consultar-pqrs.component.css'
})
export class ConsultarPQRSComponent implements OnInit{

  
  formularioConsultaPQRD!: FormGroup

  pqrd: RespuestaPQRD | null = null

  first = 0;

  rows = 10;

  constructor(
    private pqrdServicio: PqrdService,
    private fb: FormBuilder,
    private servicioMensaje: MessageService
  ){}

  ngOnInit(): void {
    this.cargarFormulario()
  }

  cargarFormulario(){
    this.formularioConsultaPQRD = this.fb.group({
      identificacion: ['', Validators.required],
      radicado: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formularioConsultaPQRD.valid) {
      const datosFormulario = this.formularioConsultaPQRD.value as PQRDUsuario;
      console.log(datosFormulario);

      this.pqrdServicio.ListarPQRDUsuario(datosFormulario).subscribe({
        next: (resp) => {
          this.pqrd = resp
          this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'PQRD Encontrada!' });
          
        }
      });

      
    }else{
      this.servicioMensaje.add({ severity: 'error', summary: 'Error', detail: 'Completa los campos!' });
    }
  }

  
}
