import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, UsuarioRegistro } from '../../../../../core/models/usuario.model';
import { UsuarioService } from '../../../../../core/services/usuario.service';
import { MessageService } from 'primeng/api';
import { OpcionComboBox } from '../../../../../core/models/opcionComboBox.model';
import { Municipios } from '../../../../../assets/datos/municipios';
import { TiposDeSecretaria } from '../../../../../assets/datos/tiposDeSecretaria';



@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})


export class FormularioUsuarioComponent implements OnInit {

  id: string | null = null;
  formulario!: FormGroup;
  textoConfirmar!: string;
  isDisabled: boolean = false

  roles: OpcionComboBox[] = [
    { id: 1, nombre: 'Usuario' },
    { id: 2, nombre: 'Administrador' },
  ];

  estados: OpcionComboBox[] = [
    { id: 1, nombre: 'Activo' },
    { id: 2, nombre: 'Inactivo' },
  ];

  departamentos: OpcionComboBox[] = [
    { id: 2, nombre: 'Cesar' },
  ];

  municipios: OpcionComboBox[] = Municipios;
  tiposDeSecretaria: OpcionComboBox[] = TiposDeSecretaria;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cargarFormulario()

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.textoConfirmar = "Actualizar";
      this.cargarUsuario()
            
    } else {
      this.textoConfirmar = "Registrar";
    }
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
  
  

  cargarFormulario(){
    this.formulario = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      nombreDeUsuario: ['', Validators.required],
      rolUsuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: [''],
      confirmarContrasena: [''],
      estado: ['', Validators.required],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      tipoDeSecretaria: ['', Validators.required],
      nombreInstitucion: ['', Validators.required],
    });
  }

  cargarUsuario(){
    this.usuarioService.ListarPorId(this.id!).subscribe({
      next: (resp: Usuario) => {
        console.log(resp);
        this.formulario.patchValue({
          identificacion: resp.identificacion,
          nombre: resp.nombre,
          nombreDeUsuario: resp.nombreDeUsuario,
          rolUsuario: resp.rolUsuario,
          correo: resp.correo,
          contrasena: '',
          confirmarContrasena: '',
          estado: resp.estado,
          departamento: resp.institucion.departamento,
          municipio: resp.institucion.municipio,
          tipoDeSecretaria: resp.institucion.tipoDeSecretaria,
          nombreInstitucion: resp.institucion.nombreInstitucion,
        });
      }
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {

      
      
      const datos = this.formulario.value;

      if(datos.confirmarContrasena !== datos.contrasena ){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Las contraseña no son iguales' });
        return
      }

      const usuarioData: Usuario | UsuarioRegistro = {
        id: this.id || '',
        identificacion: datos.identificacion,
        nombre: datos.nombre,
        nombreDeUsuario: datos.nombreDeUsuario,
        rolUsuario: datos.rolUsuario,  // Tomar el valor directamente
        correo: datos.correo,
        contrasena: datos.contrasena,
        estado: datos.estado,  // Tomar el valor directamente
        institucion: {
          departamento: datos.departamento,  // Tomar el valor directamente
          municipio: datos.municipio,  // Tomar el valor directamente
          tipoDeSecretaria: datos.tipoDeSecretaria,  // Tomar el valor directamente
          nombreInstitucion: datos.nombreInstitucion,
        },
      };

      //const datos = this.formulario.value;

      console.log(usuarioData)


      if (this.id) {

        

        this.usuarioService.Actualizar(this.id, usuarioData as Usuario).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Usuario actualizado!' });
            this.usuarioService.notifyUpdate(usuarioData as Usuario); // Notificar el cambio
          }
        });
      } else {
        
        this.usuarioService.Crear(usuarioData as UsuarioRegistro).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Usuario registrado!' });
            this.usuarioService.notifyRegistro(usuarioData as UsuarioRegistro); // Notificar el cambio
          }
        });
      }

      this.router.navigate(['/dashboard/parametros/usuario']);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Completa los campos!' });
    }
  }

  cancelar() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: this.id ? 'Actualización de usuario cancelada!' : 'Registro de usuario cancelado!' });
    this.router.navigate(['/dashboard/parametros/usuario']);
  }
}