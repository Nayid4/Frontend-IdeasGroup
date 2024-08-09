import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EAPB } from '../../../../../core/models/eapb.model';
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

    this.formulario = this.fb.group({
      id: [''],
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

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.textoConfirmar = "Actualizar"

      this.servicioEapb.ListarPorId(this.id).subscribe({
        next: (resp) => {
          this.eapb = resp
        }
      })
      
      console.log('Editando EAPB con id:', this.id);
    } else {
      this.textoConfirmar = "Registrar"
      console.log('Creando un nuevo EAPB');
    }
  }


  onSubmit(): void {
    if(this.formulario.valid){

      const datosFormulario: EAPB = this.formulario.value as EAPB;
      console.log(datosFormulario);

      if(this.id){
        this.servicioEapb.Actualizar(this.id, datosFormulario).subscribe({
          next:() => {
            this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'EAPB Actualizado!' });
          }
        })
      }else {
        this.servicioEapb.Crear(datosFormulario).subscribe({
          next:() => {
            this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'EAPB Registrado!' });
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
