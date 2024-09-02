import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Enfermedad, EnfermedadRegistro } from '../../../../../core/models/enfermedad.model';
import { EnfermedadService } from '../../../../../core/services/enfermedad.service';

@Component({
  selector: 'app-formulario-enfermedad',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-enfermedad.component.html',
  styleUrl: './formulario-enfermedad.component.css'
})
export class FormularioEnfermedadComponent implements OnInit{

  id: string | null = null;
  enfermedad!: Enfermedad
  formulario!: FormGroup
  textoConfirmar!: string
  tipo!: string | null 

  constructor(
    private route: ActivatedRoute, 
    private servicioEnfermedad: EnfermedadService,
    private fb: FormBuilder, 
    private router: Router,
    private servicioMensaje: MessageService
  ) {}

  ngOnInit(): void {

    this.tipo = this.route.snapshot.paramMap.get('tipo');

    console.log(`Tipo de enfermedad: ${this.tipo}`);
    
    this.formularioRegistro()

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      
      this.textoConfirmar = "Actualizar"

      this.servicioEnfermedad.ListarPorId(this.id).subscribe({
        next: (resp: Enfermedad) => {
          this.enfermedad = resp
          console.log(resp)
          this.formularioActualizacion(resp)
        }
      })
      
      console.log('Editando Enfermedad con id:', this.id);
    } else {
      this.textoConfirmar = "Registrar"
      console.log('Creando una nueva enfermedad');
    }
  }

  formularioRegistro(){
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      estado: ['Activo']
    });
  }

  formularioActualizacion(enfermedad: Enfermedad){
    this.formulario = this.fb.group({
      id: [enfermedad.id],
      nombre: [enfermedad.nombre, Validators.required],
      estado: [enfermedad.estado]
    });
  }


  onSubmit(): void {
    if(this.formulario.valid){
      const datos = this.formulario.value
      

      if(this.id){
        const datosFormulario: Enfermedad =  {
          id: this.enfermedad.id,
          tipoDeEnfermedad: this.enfermedad.tipoDeEnfermedad, 
          nombre: datos.nombre,
          estado: this.enfermedad.estado
        };
        console.log(datosFormulario);

        this.servicioEnfermedad.Actualizar(this.id, datosFormulario).subscribe({
          next:() => {
            this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'Enfermedad Actualizado!' });
            this.servicioEnfermedad.notifyUpdate(datosFormulario); // Notificar el cambio
          }
        })
      }else {
        const datosFormulario: EnfermedadRegistro =  {
          tipoDeEnfermedad: this.tipo!,
          nombre: datos.nombre,
          estado: datos.estado
        };
        console.log(datosFormulario);

        this.servicioEnfermedad.Crear(datosFormulario).subscribe({
          next:() => {
            this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'Enfermedad Registrado!' });
            this.servicioEnfermedad.notifyRegistro(datosFormulario); // Notificar el cambio
          }
        })
      }

      
      this.router.navigate([`/dashboard/datos-generales/enfermedades/${this.tipo}`]);

    }else{
      this.servicioMensaje.add({ severity: 'error', summary: 'Error', detail: 'Completa los campos!' });
    }
  }

  cancelar(){
    if(this.id){
      this.servicioMensaje.add({ severity: 'inf', summary: 'Info', detail: 'Actualizacion de Enfermedad Cancelada!' });
      
    }else{
      this.servicioMensaje.add({ severity: 'inf', summary: 'Info', detail: 'Registro de Enfermedad Cancelado!' });
    }

    this.router.navigate([`/dashboard/datos-generales/enfermedades/${this.tipo}`]);
  }

}
