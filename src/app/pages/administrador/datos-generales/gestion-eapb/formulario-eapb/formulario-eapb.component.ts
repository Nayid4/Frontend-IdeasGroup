import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EAPB, EAPBRegistro } from '../../../../../core/models/eapb.model';
import { EapbService } from '../../../../../core/services/eapb.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formulario-eapb',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-eapb.component.html',
  styleUrl: './formulario-eapb.component.css'
})
export class FormularioEAPBComponent implements OnInit{

  id: string | null = null;
  eapb!: EAPB
  formulario!: FormGroup
  textoConfirmar!: string

  constructor(
    private route: ActivatedRoute, 
    private servicioEapb: EapbService,
    private fb: FormBuilder, 
    private router: Router,
    private servicioMensaje: MessageService
  ) {}

  ngOnInit(): void {

    
    this.formularioRegistro()

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      
      this.textoConfirmar = "Actualizar"

      this.servicioEapb.ListarPorId(this.id).subscribe({
        next: (resp: EAPB) => {
          this.eapb = resp
          console.log(resp)
          this.formularioActualizacion(resp)
        }
      })
      
      console.log('Editando EAPB con id:', this.id);
    } else {
      this.textoConfirmar = "Registrar"
      console.log('Creando un nuevo EAPB');
    }
  }

  formularioRegistro(){
    this.formulario = this.fb.group({
      codigo: ['', Validators.required],
      nit: ['', Validators.required],
      dv: ['', Validators.required],
      razonSocial: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fax: [''],
      correo: [''],
      paginaWeb: [''],
      estado: ['Activo']
    });
  }

  formularioActualizacion(eapb: EAPB){
    this.formulario = this.fb.group({
      id: [eapb.id],
      codigo: [eapb.codigo, Validators.required],
      nit: [eapb.nit, Validators.required],
      dv: [eapb.dv, Validators.required],
      razonSocial: [eapb.razonSocial, Validators.required],
      direccion: [eapb.direccion, Validators.required],
      telefono: [eapb.telefono, Validators.required],
      fax: [eapb.fax],
      correo: [eapb.correo],
      paginaWeb: [eapb.paginaWeb],
      estado: [eapb.estado]
    });
  }


  onSubmit(): void {
    if(this.formulario.valid){
      const datos = this.formulario.value
      

      if(this.id){
        const datosFormulario: EAPB =  {
          id: datos.id,
          codigo: datos.codigo,
          nit: datos.nit,
          dv: datos.dv,
          razonSocial: datos.razonSocial,
          direccion: datos.direccion,
          telefono: datos.telefono.toString(),
          fax: datos.fax,
          correo: datos.correo,
          paginaWeb: datos.paginaWeb,
          estado: this.eapb.estado
        };
        console.log(datosFormulario);

        this.servicioEapb.Actualizar(this.id, datosFormulario).subscribe({
          next:() => {
            this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'EAPB Actualizado!' });
            this.servicioEapb.notifyUpdate(datosFormulario); // Notificar el cambio
          }
        })
      }else {
        const datosFormulario: EAPBRegistro =  {
          codigo: datos.codigo,
          nit: datos.nit,
          dv: datos.dv,
          razonSocial: datos.razonSocial,
          direccion: datos.direccion,
          telefono: datos.telefono.toString(),
          fax: datos.fax,
          correo: datos.correo,
          paginaWeb: datos.paginaWeb,
          estado: datos.estado
        };
        console.log(datosFormulario);

        this.servicioEapb.Crear(datosFormulario).subscribe({
          next:() => {
            this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'EAPB Registrado!' });
            this.servicioEapb.notifyRegistro(datosFormulario); // Notificar el cambio
          }
        })
      }

      this.router.navigate(['/dashboard/datos-generales/eapb'])

    }else{
      this.servicioMensaje.add({ severity: 'error', summary: 'Error', detail: 'Completa los campos!' });
    }
  }

  cancelar(){
    if(this.id){
      this.servicioMensaje.add({ severity: 'inf', summary: 'Info', detail: 'Actualizacion de EAPB Cancelada!' });
      
    }else{
      this.servicioMensaje.add({ severity: 'inf', summary: 'Info', detail: 'Registro de EAPB Cancelado!' });
    }

    this.router.navigate(['/dashboard/datos-generales/eapb'])
  }

}
