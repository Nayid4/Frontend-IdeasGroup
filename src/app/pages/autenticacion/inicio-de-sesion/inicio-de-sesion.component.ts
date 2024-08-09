import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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

  datos: InicioSesion = {
    nombreDeUsuario: "luzma",
    contrasena: "123456789"
  }

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private servicioAutenticacion: AutenticacionService,
    private servicioMensaje: MessageService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombreDeUsuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(this.formulario.valid){
      const datosFormulario: InicioSesion = this.formulario.value as InicioSesion;
      console.log(datosFormulario);

      this.servicioAutenticacion.IniciarSesion(datosFormulario).subscribe({
        next: () => {

          this.router.navigate(['/dashboard'])
          this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'Bienvenido' });
          
        }
      });

      
    }else{
      this.servicioMensaje.add({ severity: 'error', summary: 'Error', detail: 'Completa los campos!' });
    }
  }
}
