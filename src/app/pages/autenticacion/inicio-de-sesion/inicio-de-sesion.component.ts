import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { InicioSesion } from '../../../core/models/inicioSesion.model';
import { AutenticacionService } from '../../../core/services/autenticacion.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-inicio-de-sesion',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './inicio-de-sesion.component.html',
  styleUrl: './inicio-de-sesion.component.css'
})
export class InicioDeSesionComponent implements OnInit {
  icono = faArrowLeft;
  formulario!: FormGroup

  constructor(
    private fb: FormBuilder, 
    private servicioAutenticacion: AutenticacionService,
    private servicioMensaje: MessageService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(this.formulario.valid){
      const datosFormulario: InicioSesion = this.formulario.value as InicioSesion;
      console.log(datosFormulario);
    }
  }
}
