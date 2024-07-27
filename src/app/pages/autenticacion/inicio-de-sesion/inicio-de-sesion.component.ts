import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      usuario: [''],
      contrasena: ['']
    });
  }

  onSubmit(): void {
    console.log(this.formulario.value);
  }
}
