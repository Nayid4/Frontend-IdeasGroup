import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IPS, IPSRegistro } from '../../../../../core/models/ips.model';
import { IpsService } from '../../../../../core/services/ips.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

interface Municipio {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-formulario-ips',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-ips.component.html',
  styleUrl: './formulario-ips.component.css'
})
export class FormularioIPSComponent implements OnInit{

  id: string | null = null;
  ips!: IPS;
  formulario!: FormGroup;
  textoConfirmar!: string;

  municipios: Municipio[] = [
    {
      id: 1,
      nombre:'Valledupar'
    },
    {
      id: 2,
      nombre:'El Copey'
    },
    {
      id: 3,
      nombre:'La Paz'
    },
  ]; 

  constructor(
    private route: ActivatedRoute, 
    private servicioIps: IpsService,
    private fb: FormBuilder, 
    private router: Router,
    private servicioMensaje: MessageService
  ) {}

  ngOnInit(): void {
    this.formularioRegistro();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.textoConfirmar = "Actualizar";

      this.servicioIps.ListarPorId(this.id).subscribe({
        next: (resp: IPS) => {
          this.ips = resp;
          this.formularioActualizacion(resp);
        }
      });
      
    } else {
      this.textoConfirmar = "Registrar";
    }
  }

  formularioRegistro(){
    this.formulario = this.fb.group({
      codigo: ['', Validators.required],
      razonSocial: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fax: [''],
      municipio: ['', Validators.required],
      estado: ['Activo']
    });
  }

  formularioActualizacion(ips: IPS){
    // Buscar el municipio basado en el nombre almacenado en el IPS
    const municipioSeleccionado = this.municipios.find(m => m.nombre === ips.municipio);
  
    // Establecer el formulario con el id del municipio encontrado
    this.formulario = this.fb.group({
      id: [ips.id],
      codigo: [ips.codigo, Validators.required],
      razonSocial: [ips.razonSocial, Validators.required],
      direccion: [ips.direccion, Validators.required],
      telefono: [ips.telefono, Validators.required],
      fax: [ips.fax],
      municipio: [municipioSeleccionado ? municipioSeleccionado.id : '', Validators.required],
      estado: [ips.estado]
    });
  }
  

  onSubmit(): void {
    if (this.formulario.valid) {
      const datos = this.formulario.value;
  
      console.log("Tipo de datos.municipio:", typeof datos.municipio); // Verificar el tipo
      console.log("Valor de datos.municipio:", datos.municipio);
      console.log("Municipios disponibles:", this.municipios);

      // Convertir a número si es necesario
      const municipioSeleccionado: Municipio | undefined = this.municipios.find(m => m.id === Number(datos.municipio));

      console.log("Municipio Nombre Seleccionado:", municipioSeleccionado?.nombre);
  
      if (this.id) {
        const datosFormulario: IPS = {
          id: datos.id,
          codigo: datos.codigo,
          razonSocial: datos.razonSocial,
          direccion: datos.direccion,
          telefono: datos.telefono.toString(),
          fax: datos.fax,
          municipio: municipioSeleccionado!.nombre,
          estado: this.ips.estado
        };

        console.log(datosFormulario)
  
        this.servicioIps.Actualizar(this.id, datosFormulario).subscribe({
          next: () => {
            this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'IPS Actualizado!' });
            this.servicioIps.notifyUpdate(datosFormulario); // Notificar el cambio
          }
        });
      } else {
        const datosFormulario: IPSRegistro = {
          codigo: datos.codigo,
          razonSocial: datos.razonSocial,
          direccion: datos.direccion,
          telefono: datos.telefono.toString(),
          fax: datos.fax,
          municipio: municipioSeleccionado!.nombre,
          estado: datos.estado
        };
  
        this.servicioIps.Crear(datosFormulario).subscribe({
          next: () => {
            this.servicioMensaje.add({ severity: 'success', summary: 'Exito', detail: 'IPS Registrado!' });
            this.servicioIps.notifyRegistro(datosFormulario); // Notificar el cambio
          }
        });
      }
  
      this.router.navigate(['/dashboard/datos-generales/ips']);
  
    } else {
      this.servicioMensaje.add({ severity: 'error', summary: 'Error', detail: 'Completa los campos!' });
    }
  }  
  

  cancelar(){
    if(this.id){
      this.servicioMensaje.add({ severity: 'info', summary: 'Info', detail: 'Actualizacion de IPS Cancelada!' });
    } else {
      this.servicioMensaje.add({ severity: 'info', summary: 'Info', detail: 'Registro de IPS Cancelado!' });
    }

    this.router.navigate(['/dashboard/datos-generales/ips']);
  }
}
