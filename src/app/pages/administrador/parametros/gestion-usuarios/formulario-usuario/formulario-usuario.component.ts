import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, UsuarioRegistro } from '../../../../../core/models/usuario.model';
import { UsuarioService } from '../../../../../core/services/usuario.service';
import { MessageService } from 'primeng/api';

interface OpcionComboBox {
  id: number;
  nombre: string;
}

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
  usuario!: Usuario;
  formulario!: FormGroup;
  textoConfirmar!: string;

  roles: OpcionComboBox[] = [
    { id: 1, nombre: 'Usuario' },
    { id: 2, nombre: 'Administrador' },
  ];

  estados: OpcionComboBox[] = [
    { id: 1, nombre: 'Activo' },
    { id: 2, nombre: 'Inactivo' },
  ];

  departamentos: OpcionComboBox[] = [
    { id: 1, nombre: 'Antioquia' },
    { id: 2, nombre: 'Cesar' },
  ];

  municipios: OpcionComboBox[] = [
    { id: 1, nombre: 'Medellín' },
    { id: 2, nombre: 'Valledupar' },
  ];

  tiposDeSecretaria: OpcionComboBox[] = [
    { id: 1, nombre: 'Educación' },
    { id: 2, nombre: 'Salud' },
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.formularioRegistro();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.textoConfirmar = "Actualizar";

      this.usuarioService.ListarPorId(this.id).subscribe({
        next: (resp: Usuario) => {
          this.usuario = resp;
          this.formularioActualizacion(resp);
        }
      });
      
    } else {
      this.textoConfirmar = "Registrar";
    }
  }

  formularioRegistro() {
    this.formulario = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      nombreDeUsuario: ['', Validators.required],
      rolUsuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      confirmarContrasena: ['', Validators.required],
      estado: ['', Validators.required],
      institucion: this.fb.group({
        departamento: ['', Validators.required],
        municipio: ['', Validators.required],
        tipoDeSecretaria: ['', Validators.required],
        nombreInstitucion: ['', Validators.required],
      }),
    });
  }

  formularioActualizacion(usuario: Usuario) {
    const rolSeleccionado = this.roles.find(r => r.nombre === usuario.rolUsuario);
    const estadoSeleccionado = this.estados.find(e => e.nombre === usuario.estado);
    const departamentoSeleccionado = this.departamentos.find(d => d.nombre === usuario.institucion.departamento);
    const municipioSeleccionado = this.municipios.find(m => m.nombre === usuario.institucion.municipio);
    const tipoDeSecretariaSeleccionado = this.tiposDeSecretaria.find(t => t.nombre === usuario.institucion.tipoDeSecretaria);

    this.formulario.patchValue({
      identificacion: usuario.identificacion,
      nombre: usuario.nombre,
      nombreDeUsuario: usuario.nombreDeUsuario,
      rolUsuario: rolSeleccionado ? rolSeleccionado.id : '',
      correo: usuario.correo,
      contrasena: usuario.contrasena,
      confirmarContrasena: usuario.contrasena,
      estado: estadoSeleccionado ? estadoSeleccionado.id : '',
      institucion: {
        departamento: departamentoSeleccionado ? departamentoSeleccionado.id : '',
        municipio: municipioSeleccionado ? municipioSeleccionado.id : '',
        tipoDeSecretaria: tipoDeSecretariaSeleccionado ? tipoDeSecretariaSeleccionado.id : '',
        nombreInstitucion: usuario.institucion.nombreInstitucion,
      },
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const datos = this.formulario.value;

      if (this.id) {
        const datosFormulario: Usuario = {
          id: this.id,
          identificacion: datos.identificacion,
          nombre: datos.nombre,
          nombreDeUsuario: datos.nombreDeUsuario,
          rolUsuario: this.roles.find(r => r.id === Number(datos.rolUsuario))!.nombre,
          correo: datos.correo,
          contrasena: datos.contrasena,
          estado: this.estados.find(e => e.id === Number(datos.estado))!.nombre,
          institucion: {
            departamento: this.departamentos.find(d => d.id === Number(datos.institucion.departamento))!.nombre,
            municipio: this.municipios.find(m => m.id === Number(datos.institucion.municipio))!.nombre,
            tipoDeSecretaria: this.tiposDeSecretaria.find(t => t.id === Number(datos.institucion.tipoDeSecretaria))!.nombre,
            nombreInstitucion: datos.institucion.nombreInstitucion,
          },
        };

        this.usuarioService.Actualizar(this.id, datosFormulario).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Usuario Actualizado!' });
            this.usuarioService.notifyUsuarioUpdate(datosFormulario); // Notificar el cambio
          }
        });
      } else {
        const datosFormulario: UsuarioRegistro = {
          identificacion: datos.identificacion,
          nombre: datos.nombre,
          nombreDeUsuario: datos.nombreDeUsuario,
          rolUsuario: this.roles.find(r => r.id === Number(datos.rolUsuario))!.nombre,
          correo: datos.correo,
          contrasena: datos.contrasena,
          estado: this.estados.find(e => e.id === Number(datos.estado))!.nombre,
          institucion: {
            departamento: this.departamentos.find(d => d.id === Number(datos.institucion.departamento))!.nombre,
            municipio: this.municipios.find(m => m.id === Number(datos.institucion.municipio))!.nombre,
            tipoDeSecretaria: this.tiposDeSecretaria.find(t => t.id === Number(datos.institucion.tipoDeSecretaria))!.nombre,
            nombreInstitucion: datos.institucion.nombreInstitucion,
          },
        };

        this.usuarioService.Crear(datosFormulario).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Usuario Registrado!' });
            this.usuarioService.notifyUsuarioRegistro(datosFormulario); // Notificar el cambio
          }
        });
      }

      this.router.navigate(['/dashboard/usuarios']);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Completa los campos!' });
    }
  }

  cancelar() {
    if (this.id) {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Actualización de usuario cancelada!' });
    } else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Registro de usuario cancelado!' });
    }

    this.router.navigate(['/dashboard/usuarios']);
  }
}
