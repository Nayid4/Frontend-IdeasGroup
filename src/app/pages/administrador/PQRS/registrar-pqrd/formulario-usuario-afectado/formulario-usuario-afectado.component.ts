import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EapbService } from '../../../../../core/services/eapb.service';
import { UsuarioAfectado } from '../../../../../core/models/Pqrd.model';
import { EAPB } from '../../../../../core/models/eapb.model';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-formulario-usuario-afectado',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  templateUrl: './formulario-usuario-afectado.component.html',
  styleUrl: './formulario-usuario-afectado.component.css'
})
export class FormularioUsuarioAfectadoComponent implements OnInit {

  @Input() idUsuarioAfectado!:UsuarioAfectado | null;
  formularioUsuarioAfectado!: FormGroup;
  listaEAPB: EAPB[] = []
  filteredEAPBs: EAPB[] = [];
  edad: string = '';
  grupoEtario: string = '';

  tiposDeDocumentos: {id: number, tipo: string}[] = [
    {
      id: 1,
      tipo: "RC"
    },
    {
      id: 2,
      tipo: "TI"
    },
    {
      id: 3,
      tipo: "CC"
    }
  ]

  sexos: {id: number, tipo: string}[] = [
    {
      id: 1,
      tipo: "Masculino"
    },
    {
      id: 2,
      tipo: "Femenino"
    },
    {
      id: 3,
      tipo: "Otro"
    }
  ]

  regimenes: {id: number, tipo: string}[] = [
    {
      id: 1,
      tipo: "Subsidiado"
    },
    {
      id: 2,
      tipo: "Exeptuado"
    },
    {
      id: 3,
      tipo: "Contributivo"
    },
    {
      id: 4,
      tipo: "Otro"
    }
  ]

  zonas: {id: number, tipo: string}[] = [
    {
      id: 1,
      tipo: "Urbana"
    },
    {
      id: 2,
      tipo: "Rural"
    }
  ]

  constructor(
    private fb: FormBuilder,
    private EapbService: EapbService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cargarFormulario();
    this.EapbService.ListarPorEstado("Activo").subscribe({
      next: (valor) => {
        this.listaEAPB = valor
        this.filteredEAPBs = valor;
      }
    })
  }

  cargarFormulario(): void {
    this.formularioUsuarioAfectado = this.fb.group({
      tipoDocumento: ['', Validators.required],
      documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      regimen: ['', Validators.required],
      idEAPB: ['', Validators.required],
      fechaDeNacimiento: ['', Validators.required],
      zona: ['', Validators.required],
      estado: ['Activo', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.formularioUsuarioAfectado.valid) {
      const datosFormulario = this.formularioUsuarioAfectado.value;
      // Lógica para enviar los datos al servicio o API
      console.log('Formulario enviado:', datosFormulario);
      this.messageService.add({severity:'success', summary:'Éxito', detail:'Usuario afectado registrado exitosamente'});
      this.router.navigate(['/ruta-destino']); // Cambia a la ruta deseada
    }
  }

  updateAgeAndGroup(): void {
    const fechaDeNacimiento = new Date(this.formularioUsuarioAfectado.value.fechaDeNacimiento);
    const edad = this.calculateAge(fechaDeNacimiento);
    const grupoEtario = this.getAgeGroup(edad);
    this.edad = edad.toString();
    this.grupoEtario = grupoEtario;
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getAgeGroup(age: number): string {
    if (age < 18) return 'Menor de Edad';
    if (age >= 18 && age <= 64) return 'Adulto';
    return 'Adulto Mayor';
  }

  filterEAPBs(event: any): void {
    const query = event.query.toLowerCase();
    this.filteredEAPBs = this.listaEAPB.filter(eapb => eapb.razonSocial.toLowerCase().includes(query));
  }


}
