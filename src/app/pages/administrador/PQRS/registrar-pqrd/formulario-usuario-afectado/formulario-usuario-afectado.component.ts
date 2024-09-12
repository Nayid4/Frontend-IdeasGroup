import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EapbService } from '../../../../../core/services/eapb.service';
import { UsuarioAfectado } from '../../../../../core/models/Pqrd.model';
import { EAPB } from '../../../../../core/models/eapb.model';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RespuestaUsuarioAfectado } from '../../../../../core/models/RespuestaPqrd.model';
import { ComandoCrearUsuarioAfectado } from '../../../../../core/models/ComandoPqrd.model';
import { AutenticacionService } from '../../../../../core/services/autenticacion.service';
import { DatosUsuario } from '../../../../../core/models/datosUsuario.model';
import { OpcionComboBox } from '../../../../../core/models/opcionComboBox.model';
import { Municipios } from '../../../../../assets/datos/municipios';

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

  @Input() idUsuarioAfectado!:RespuestaUsuarioAfectado | null;
  @Output() formularioSubmit = new EventEmitter<RespuestaUsuarioAfectado | ComandoCrearUsuarioAfectado>();

  @Input() usuarioNormal: boolean = false
  @Output() entidadTerritorial = new EventEmitter<string>
  
  formularioUsuarioAfectado!: FormGroup;
  listaEAPB: EAPB[] = [];
  filteredEAPBs: EAPB[] = [];
  edad: string = '';
  grupoEtario: string = '';
  usuario!: DatosUsuario;

  municipios: OpcionComboBox[] = Municipios;
  
  tiposDeDocumentos: { id: number, tipo: string }[] = [
    { id: 1, tipo: "RC" },
    { id: 2, tipo: "TI" },
    { id: 3, tipo: "CC" }
  ];

  sexos: { id: number, tipo: string }[] = [
    { id: 1, tipo: "Masculino" },
    { id: 2, tipo: "Femenino" },
    { id: 3, tipo: "Otro" }
  ];

  regimenes: { id: number, tipo: string }[] = [
    { id: 1, tipo: "Subsidiado" },
    { id: 2, tipo: "Exeptuado" },
    { id: 3, tipo: "Contributivo" },
    { id: 4, tipo: "Otro" }
  ];

  zonas: { id: number, tipo: string }[] = [
    { id: 1, tipo: "Urbana" },
    { id: 2, tipo: "Rural" }
  ];

  constructor(
    private fb: FormBuilder,
    private servicioAutenticacion: AutenticacionService,
    private eapbService: EapbService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cargarFormulario();

    

    // Carga las EAPBs disponibles
    this.eapbService.ListarPorEstado("Activo").subscribe({
      next: (valor) => {
        this.listaEAPB = valor;
        this.filteredEAPBs = valor;
      }
    });

    // Si hay datos de un usuario afectado, prellenar el formulario
    if (this.idUsuarioAfectado) {
      this.formularioUsuarioAfectado.patchValue({
        tipoDocumento: this.idUsuarioAfectado.tipoDocumento,
        documento: this.idUsuarioAfectado.documento,
        nombres: this.idUsuarioAfectado.nombres,
        apellidos: this.idUsuarioAfectado.apellidos,
        sexo: this.idUsuarioAfectado.sexo,
        telefono: this.idUsuarioAfectado.telefono,
        direccion: this.idUsuarioAfectado.direccion,
        correo: this.idUsuarioAfectado.correo,
        regimen: this.idUsuarioAfectado.regimen,
        idEAPB: this.idUsuarioAfectado.idEAPB,
        fechaDeNacimiento: this.idUsuarioAfectado.fechaDeNacimiento,
        zona: this.idUsuarioAfectado.zona,
        estado: this.idUsuarioAfectado.estado,
      });

      if (this.idUsuarioAfectado.fechaDeNacimiento) {
        this.updateAgeAndGroup();
      }
    }
  }

  cargarFormulario(): void {
    this.formularioUsuarioAfectado = this.fb.group({
      entidadTerritorial: ['', this.usuarioNormal ? Validators.required : []],
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

  preventNegative(event: KeyboardEvent) {
    if (event.key === '-' 
        || event.key === 'e' 
        || event.key === '+' 
        || event.key === '.' || event.key === ',') {
      event.preventDefault();
    }
  }

  validateMaxLength(event: any) {
    const input = event.target;
    if (input.value.length > 10) {
      input.value = input.value.slice(0, 10); // Limitar a 10 dígitos
    }
  }

  onSubmit(): void {
    if (this.formularioUsuarioAfectado.valid) {
      const datosFormulario = this.formularioUsuarioAfectado.value;

      if (this.idUsuarioAfectado) {
        const respuestaUsuarioAfectado: RespuestaUsuarioAfectado = {
          //...datosFormulario,
          id: this.idUsuarioAfectado.id,
          tipoDocumento: datosFormulario.tipoDocumento,
          nombres: datosFormulario.nombres,
          apellidos: datosFormulario.apellidos,
          direccion: datosFormulario.direccion,
          zona:datosFormulario.zona,
          correo: datosFormulario.correo,
          regimen: datosFormulario.regimen,
          documento: datosFormulario.documento,
          idEAPB:datosFormulario.idEAPB.nombre,
          fechaDeNacimiento: datosFormulario.fechaDeNacimiento,
          estado: 'Activo',
          telefono: datosFormulario.telefono,
          sexo: datosFormulario.sexo,
          fechaCreacion: this.idUsuarioAfectado.fechaCreacion,
          fechaActualizacion: new Date(),
        };
        this.formularioSubmit.emit(respuestaUsuarioAfectado);
      } else {
        const comandoCrearUsuarioAfectado: ComandoCrearUsuarioAfectado = {
          ...datosFormulario,
        };

        if(this.usuarioNormal){
          this.entidadTerritorial.emit(datosFormulario.entidadTerritorial);
        }

        this.formularioSubmit.emit(comandoCrearUsuarioAfectado);
      }

      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Datos emitidos correctamente' });
      //this.router.navigate(['/ruta-destino']);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor complete todos los campos requeridos' });
    }
  }

  onNext(): void {
    if (this.formularioUsuarioAfectado.valid) {
      const datosFormulario = this.formularioUsuarioAfectado.value;

      if (this.idUsuarioAfectado) {
        const respuestaUsuarioAfectado: RespuestaUsuarioAfectado = {
          //...datosFormulario,
          id: this.idUsuarioAfectado.id,
          tipoDocumento: datosFormulario.tipoDocumento,
          nombres: datosFormulario.nombres,
          apellidos: datosFormulario.apellidos,
          direccion: datosFormulario.direccion,
          zona:datosFormulario.zona,
          correo: datosFormulario.correo,
          regimen: datosFormulario.regimen,
          documento: datosFormulario.documento,
          idEAPB:datosFormulario.idEAPB.id,
          fechaDeNacimiento: datosFormulario.fechaDeNacimiento,
          estado: 'Activo',
          telefono: datosFormulario.telefono,
          sexo: datosFormulario.sexo,
          fechaCreacion: this.idUsuarioAfectado.fechaCreacion,
          fechaActualizacion: new Date(),
        };

        console.log(respuestaUsuarioAfectado)

        this.formularioSubmit.emit(respuestaUsuarioAfectado);
      } else {
        const comandoCrearUsuarioAfectado: ComandoCrearUsuarioAfectado = {
          tipoDocumento: datosFormulario.tipoDocumento,
          nombres: datosFormulario.nombres,
          apellidos: datosFormulario.apellidos,
          direccion: datosFormulario.direccion,
          zona:datosFormulario.zona,
          correo: datosFormulario.correo,
          regimen: datosFormulario.regimen,
          documento: datosFormulario.documento,
          idEAPB:datosFormulario.idEAPB.id,
          fechaDeNacimiento: datosFormulario.fechaDeNacimiento,
          estado: 'Activo',
          telefono: datosFormulario.telefono,
          sexo: datosFormulario.sexo,
        };

        console.log("UsuarioAfectado: ",comandoCrearUsuarioAfectado)
        this.formularioSubmit.emit(comandoCrearUsuarioAfectado);
      }

      // Avanzar al siguiente tab
      //this.router.navigate(['next-tab-route']); // Reemplaza 'next-tab-route' con la ruta al siguiente tab
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor complete todos los campos requeridos' });
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

