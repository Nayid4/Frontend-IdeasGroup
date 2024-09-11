import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AspectoGeneralDePQRD } from '../../../../../core/models/Pqrd.model';
import { IpsService } from '../../../../../core/services/ips.service';
import { EapbService } from '../../../../../core/services/eapb.service';
import { IPS } from '../../../../../core/models/ips.model';
import { EAPB } from '../../../../../core/models/eapb.model';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MacroMotivo, MotivoEspecifico, MotivoGeneral } from '../../../../../core/models/motivos.model';
import { RespuestaAspectoGeneralDePQRD, RespuestaUsuarioAfectado } from '../../../../../core/models/RespuestaPqrd.model';
import { ComandoCrearAspectoGeneralDePQRD, ComandoCrearUsuarioAfectado } from '../../../../../core/models/ComandoPqrd.model';


@Component({
  selector: 'app-formulario-aspecto-general',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  templateUrl: './formulario-aspecto-general.component.html',
  styleUrl: './formulario-aspecto-general.component.css'
})
export class FormularioAspectoGeneralComponent implements OnInit {
  @Input() aspectosGenerales!: RespuestaAspectoGeneralDePQRD
  @Output() formularioSubmit = new EventEmitter<ComandoCrearAspectoGeneralDePQRD | RespuestaAspectoGeneralDePQRD>();

  @Input() usuarioAfectado!: RespuestaUsuarioAfectado | ComandoCrearUsuarioAfectado | null

  formularioAspectosGenerales!: FormGroup;
  listaIPS: IPS[] = []
  listaEAPB: EAPB[] = []
  filteredEAPBs: EAPB[] = [];
  filteredIPSs: IPS[] = [];

  tiposDeDocumentos: {id: number, tipo: string}[] = [
    { id: 1, tipo: "RC" },
    { id: 2, tipo: "TI" },
    { id: 3, tipo: "CC" }
  ];

  MediosDeExpresion: {id: number, tipo: string}[] = [
    { id: 1, tipo: "Correo Electronico" },
    { id: 2, tipo: "Pagina Web" },
    { id: 3, tipo: "Telefono" },
    { id: 4, tipo: "Verbal" },
    { id: 5, tipo: "Escrita" },
    { id: 6, tipo: "Otro" }
  ];

  tiposDeTecnologias: {id: number, tipo: string}[] = [
    { id: 1, tipo: "POS" },
    { id: 2, tipo: "NO POS" }
  ];

  Empresas: {id: number, tipo: string}[] = [
    { id: 1, tipo: "EAPB" },
    { id: 2, tipo: "IPS" }
  ];

  clasificaciones: {id: number, tipo: string}[] = [
    { id: 1, tipo: "Petición" },
    { id: 2, tipo: "Queja" },
    { id: 3, tipo: "Reclamo" },
    { id: 4, tipo: "Denuncia" }
  ];

  motivosEspecificos: MotivoEspecifico[] = [
    {
      id: 1,
      nombre: "Motivo Específico 1",
      motivosGenerales: [
        {
          id: 1,
          nombre: "Motivo General 1.1",
          macroMotivos: [
            { id: 1, nombre: "Macro Motivo 1.1.1" },
            { id: 2, nombre: "Macro Motivo 1.1.2" }
          ]
        },
        {
          id: 2,
          nombre: "Motivo General 1.2",
          macroMotivos: [
            { id: 3, nombre: "Macro Motivo 1.2.1" },
            { id: 4, nombre: "Macro Motivo 1.2.2" }
          ]
        }
      ]
    },
    {
      id: 2,
      nombre: "Motivo Específico 2",
      motivosGenerales: [
        {
          id: 3,
          nombre: "Motivo General 2.1",
          macroMotivos: [
            { id: 5, nombre: "Macro Motivo 2.1.1" },
            { id: 6, nombre: "Macro Motivo 2.1.2" }
          ]
        },
        {
          id: 4,
          nombre: "Motivo General 2.2",
          macroMotivos: [
            { id: 7, nombre: "Macro Motivo 2.2.1" },
            { id: 8, nombre: "Macro Motivo 2.2.2" }
          ]
        }
      ]
    }
  ];

  selectedMotivoEspecifico!: MotivoEspecifico;
  selectedMotivoGeneral!: MotivoGeneral;
  selectedMacroMotivo!: MacroMotivo;

  // Declarar las propiedades faltantes
  filteredMotivosEspecificos: MotivoEspecifico[] = [];
  filteredMotivosGenerales: MotivoGeneral[] = [];
  filteredMacroMotivos: MacroMotivo[] = [];

  constructor(
    private fb: FormBuilder,
    private ipsServicio: IpsService,
    private eapbServicio: EapbService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cargarFormulario();
    this.eapbServicio.ListarPorEstado("Activo").subscribe({
      next: (valor) => {
        this.listaEAPB = valor;
        this.filteredEAPBs = valor;
      }
    });

    this.ipsServicio.ListarPorEstado("Activo").subscribe({
      next: (valor) => {
        this.listaIPS = valor;
        this.filteredIPSs = valor;
      }
    });

    if (this.aspectosGenerales) {
      this.formularioAspectosGenerales.patchValue({
        // Usuario PQRD
        tipoDocumento: this.aspectosGenerales.usuarioPQRD.tipoDocumento,
        documento: this.aspectosGenerales.usuarioPQRD.documento,
        nombres: this.aspectosGenerales.usuarioPQRD.nombres,
        apellidos: this.aspectosGenerales.usuarioPQRD.apellidos,
        telefono: this.aspectosGenerales.usuarioPQRD.telefono,
        correo: this.aspectosGenerales.usuarioPQRD.correo,
        estadoUsuario: this.aspectosGenerales.usuarioPQRD.estado,

        // Fundamento PQRD
        descripcion: this.aspectosGenerales.fundamentoPQRD.descripcion,
        documentoFundamento: this.aspectosGenerales.fundamentoPQRD.documento,
        medioDeExpresion: this.aspectosGenerales.fundamentoPQRD.medioDeExpresion,
        tipoDeTecnologia: this.aspectosGenerales.fundamentoPQRD.tipoDeTecnologia,
        entidadDenunciada: this.aspectosGenerales.fundamentoPQRD.entidadDenunciada,
        idEntidadDenunciada: this.aspectosGenerales.fundamentoPQRD.idEntidadDenunciada,
        estadoFundamento: this.aspectosGenerales.fundamentoPQRD.estado,

        // Tipología PQRD
        motivoEspecifico: this.aspectosGenerales.idTipologiaPQRD.motivoEspecifico,
        motivoGeneral: this.aspectosGenerales.idTipologiaPQRD.motivoGeneral,
        macroMotivo: this.aspectosGenerales.idTipologiaPQRD.macroMotivo,
        clasificacionDeLaPQRD: this.aspectosGenerales.idTipologiaPQRD.clasificacionDeLaPQRD,
        estadoTipologia: this.aspectosGenerales.idTipologiaPQRD.estado,

        // Otros
        riesgoVital: this.aspectosGenerales.riesgoVital
      });
    }
  }

  cargarFormulario() {
    this.formularioAspectosGenerales = this.fb.group({
      // Usuario PQRD
      tipoDocumento: ['', Validators.required],
      documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      estadoUsuario: ['Activo', Validators.required],

      // Fundamento PQRD
      descripcion: ['', Validators.required],
      documentoFundamento: ['', Validators.required],
      medioDeExpresion: ['', Validators.required],
      tipoDeTecnologia: ['', Validators.required],
      entidadDenunciada: ['', Validators.required],
      idEntidadDenunciada: ['', Validators.required],
      estadoFundamento: ['Activo', Validators.required],

      // Tipología PQRD
      motivoEspecifico: ['', Validators.required],
      motivoGeneral: ['', Validators.required],
      macroMotivo: ['', Validators.required],
      clasificacionDeLaPQRD: ['', Validators.required],
      estadoTipologia: ['Activo', Validators.required],

      // Otros
      riesgoVital: [false]
    });
  }

  cargarUsuarioAfectado(){
    if(this.usuarioAfectado){
      this.formularioAspectosGenerales.patchValue({
        // Usuario PQRD
        tipoDocumento: this.usuarioAfectado.tipoDocumento,
        documento: this.usuarioAfectado.documento,
        nombres: this.usuarioAfectado.nombres,
        apellidos: this.usuarioAfectado.apellidos,
        telefono: this.usuarioAfectado.telefono,
        correo: this.usuarioAfectado.correo,
        estadoUsuario: this.usuarioAfectado.estado
      })
    }
  }

  onSubmit(): void {
    console.log(this.formularioAspectosGenerales.value);
    if (this.formularioAspectosGenerales.valid) {
      if(this.aspectosGenerales){
        const datosFormulario = this.formularioAspectosGenerales.value;
        const respuestaAspectosGenerales: RespuestaAspectoGeneralDePQRD = {
          id: this.aspectosGenerales.id,
          usuarioPQRD: {
            id: this.aspectosGenerales.usuarioPQRD.id,
            tipoDocumento: datosFormulario.tipoDocumento,
            documento: datosFormulario.documento,
            nombres: datosFormulario.nombres,
            apellidos: datosFormulario.apellidos,
            telefono: datosFormulario.telefono,
            correo: datosFormulario.correo,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date(),
            estado: 'Activo'
          },
          fundamentoPQRD: {
            id: this.aspectosGenerales.fundamentoPQRD.id,
            descripcion: datosFormulario.descripcion,
            documento: datosFormulario.documentoFundamento,
            medioDeExpresion: datosFormulario.medioDeExpresion,
            tipoDeTecnologia: datosFormulario.tipoDeTecnologia,
            entidadDenunciada: datosFormulario.entidadDenunciada,
            idEntidadDenunciada: datosFormulario.idEntidadDenunciada.id,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date(),
            estado: 'Activo',
          },
          riesgoVital: datosFormulario.riesgoVital,
          idTipologiaPQRD: {
            id: this.aspectosGenerales.idTipologiaPQRD.id,
            motivoEspecifico: datosFormulario.motivoEspecifico.nombre,
            motivoGeneral: datosFormulario.motivoGeneral,
            macroMotivo: datosFormulario.macroMotivo,
            clasificacionDeLaPQRD: datosFormulario.clasificacionDeLaPQRD,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date(),
            estado: 'Ativo',
          },
          fechaCreacion: new Date(),
          fechaActualizacion: new Date(),
          estado: 'Activo',
        }
        console.log("Respuesta aspectos: ",respuestaAspectosGenerales);
        // Emitir el formulario al componente padre
        this.formularioSubmit.emit(respuestaAspectosGenerales);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Datos emitidos correctamente' });
        //this.router.navigate(['/ruta-destino']);
      }else{
        const datosFormulario = this.formularioAspectosGenerales.value;
        const comandoAspectosGenerales: ComandoCrearAspectoGeneralDePQRD = {
          
          usuarioPQRD: {
            tipoDocumento: datosFormulario.tipoDocumento,
            documento: datosFormulario.documento,
            nombres: datosFormulario.nombres,
            apellidos: datosFormulario.apellidos,
            telefono: datosFormulario.telefono,
            correo: datosFormulario.correo,
            estado: 'Activo'
          },
          fundamentoPQRD: {
            descripcion: datosFormulario.descripcion,
            documento: datosFormulario.documentoFundamento,
            medioDeExpresion: datosFormulario.medioDeExpresion,
            tipoDeTecnologia: datosFormulario.tipoDeTecnologia,
            entidadDenunciada: datosFormulario.entidadDenunciada,
            idEntidadDenunciada: datosFormulario.idEntidadDenunciada.id,
            estado: 'Activo',
          },
          riesgoVital: datosFormulario.riesgoVital,
          idTipologiaPQRD: {
            motivoEspecifico: datosFormulario.motivoEspecifico.nombre,
            motivoGeneral: datosFormulario.motivoGeneral,
            macroMotivo: datosFormulario.macroMotivo,
            clasificacionDeLaPQRD: datosFormulario.clasificacionDeLaPQRD,
            estado: 'Ativo',
          },
          estado: 'Activo',
        }
        console.log("Comando aspectos: ",comandoAspectosGenerales);
        // Emitir el formulario al componente padre
        this.formularioSubmit.emit(comandoAspectosGenerales);
      }
      
    } else {
      
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor complete todos los campos requeridos' });
    }
  }

  filterEAPBs(event: any): void {
    const query = event.query.toLowerCase();
    this.filteredEAPBs = this.listaEAPB.filter(eapb => eapb.razonSocial.toLowerCase().includes(query));
  }

  filterIPSs(event: any): void {
    const query = event.query.toLowerCase();
    this.filteredIPSs = this.listaIPS.filter(eapb => eapb.razonSocial.toLowerCase().includes(query));
  }

  filterMotivoEspecifico(event: any): void {
    const query = event.query.toLowerCase();
    this.filteredMotivosEspecificos = this.motivosEspecificos.filter(motivo =>
      motivo.nombre.toLowerCase().includes(query)
    );
  }

  onMotivoEspecificoChange(event: any): void {
    const selectedMotivoEspecifico = this.formularioAspectosGenerales.value.motivoEspecifico;

    if (selectedMotivoEspecifico) {
      this.filteredMotivosGenerales = selectedMotivoEspecifico.motivosGenerales || [];
    } else {
      this.filteredMotivosGenerales = [];
    }
  }

  onMotivoGeneralChange(event: any): void {
    const selected = event;
    if (selected) {
      this.filteredMacroMotivos = this.motivosEspecificos[0].motivosGenerales[0].macroMotivos;
      this.formularioAspectosGenerales.patchValue({ macroMotivo: null });
    } else {
      this.filteredMacroMotivos = [];
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
}
