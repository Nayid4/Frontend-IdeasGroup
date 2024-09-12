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
import { MacroMotivo, MotivoEspecifico, MotivoGeneral, SubtipoMotivoEspecifico, TipoMotivoEspecifico } from '../../../../../core/models/motivo.model';
import { RespuestaAspectoGeneralDePQRD, RespuestaUsuarioAfectado } from '../../../../../core/models/RespuestaPqrd.model';
import { ComandoCrearAspectoGeneralDePQRD, ComandoCrearUsuarioAfectado } from '../../../../../core/models/ComandoPqrd.model';
import { MacroMotivos } from '../../../../../assets/datos/motivosDeReclamo';
import { ComandoActualizarAspectoGeneralDePQRD } from '../../../../../core/models/actualizarPqrd.model';


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
  @Output() formularioSubmit = new EventEmitter<ComandoCrearAspectoGeneralDePQRD | ComandoActualizarAspectoGeneralDePQRD>();

  @Input() usuarioAfectado!: ComandoCrearUsuarioAfectado | ComandoCrearUsuarioAfectado | null

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

  listaDeMotivos: MacroMotivo[] = MacroMotivos;
  macroMotivo!: MacroMotivo;
  motivosGeneral!: MotivoGeneral[];
  motivosEspecifico!: MotivoEspecifico[];
  tipoMotivoEspecifico!: TipoMotivoEspecifico[]
  subtipoMotivoEspecifico!: SubtipoMotivoEspecifico[]


  /*motivosEspecificos: MotivoEspecifico[] = [
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
  ];*/

  

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
        idEntidadDenunciada: this.aspectosGenerales.fundamentoPQRD.entidadDenunciada === "IPS" ? 
        this.listaIPS.find(ip => ip.id == this.aspectosGenerales.fundamentoPQRD.idEntidadDenunciada)?.razonSocial: 
        this.listaEAPB.find(ea => ea.id == this.aspectosGenerales.fundamentoPQRD.idEntidadDenunciada)?.razonSocial,
        estadoFundamento: this.aspectosGenerales.fundamentoPQRD.estado,

        // Tipología PQRD
        macroMotivo: this.aspectosGenerales.idTipologiaPQRD.macroMotivo,
        motivoGeneral: this.aspectosGenerales.idTipologiaPQRD.motivoGeneral,
        motivoEspecifico: this.aspectosGenerales.idTipologiaPQRD.motivoEspecifico,
        tipoDeMotivoEspecifico: this.aspectosGenerales.idTipologiaPQRD.tipoDeMotivoEspecifico,
        subTipoDeMotivoEspecifico: this.aspectosGenerales.idTipologiaPQRD.subTipoDeMotivoEspecifico,
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
      macroMotivo: ['', Validators.required],
      motivoGeneral: ['', Validators.required],
      motivoEspecifico: ['', Validators.required],
      tipoDeMotivoEspecifico: ['', Validators.required],
      subTipoDeMotivoEspecifico: ['', Validators.required],
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
        const respuestaAspectosGenerales: ComandoActualizarAspectoGeneralDePQRD = {
          id: this.aspectosGenerales.id,
          usuarioPQRD: {
            id: this.aspectosGenerales.usuarioPQRD.id,
            tipoDocumento: datosFormulario.tipoDocumento,
            documento: datosFormulario.documento,
            nombres: datosFormulario.nombres,
            apellidos: datosFormulario.apellidos,
            telefono: datosFormulario.telefono+"",
            correo: datosFormulario.correo,
            estado: 'Activo'
          },
          fundamentoPQRD: {
            id: this.aspectosGenerales.fundamentoPQRD.id,
            descripcion: datosFormulario.descripcion,
            documento: "",//datosFormulario.documentoFundamento,
            medioDeExpresion: datosFormulario.medioDeExpresion,
            tipoDeTecnologia: datosFormulario.tipoDeTecnologia,
            entidadDenunciada: datosFormulario.entidadDenunciada,
            idEntidadDenunciada: datosFormulario.idEntidadDenunciada,
            estado: 'Activo',
          },
          riesgoVital: datosFormulario.riesgoVital,
          idTipologiaPQRD: {
            id: this.aspectosGenerales.idTipologiaPQRD.id,
            macroMotivo: datosFormulario.macroMotivo,
            motivoGeneral: datosFormulario.motivoGeneral,
            motivoEspecifico: datosFormulario.motivoEspecifico,
            tipoDeMotivoEspecifico: datosFormulario.tipoDeMotivoEspecifico,            
            subTipoDeMotivoEspecifico: datosFormulario.subTipoDeMotivoEspecifico,
            clasificacionDeLaPQRD: datosFormulario.clasificacionDeLaPQRD,
            estado: 'Ativo',
          },
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
            telefono: datosFormulario.telefono.toString(),
            correo: datosFormulario.correo,
            estado: 'Activo'
          },
          fundamentoPQRD: {
            descripcion: datosFormulario.descripcion,
            documento: "",//datosFormulario.documentoFundamento,
            medioDeExpresion: datosFormulario.medioDeExpresion,
            tipoDeTecnologia: datosFormulario.tipoDeTecnologia,
            entidadDenunciada: datosFormulario.entidadDenunciada,
            idEntidadDenunciada: datosFormulario.idEntidadDenunciada,
            estado: 'Activo',
          },
          riesgoVital: datosFormulario.riesgoVital,
          idTipologiaPQRD: {
            macroMotivo: datosFormulario.macroMotivo,
            motivoGeneral: datosFormulario.motivoGeneral,
            motivoEspecifico: datosFormulario.motivoEspecifico,
            tipoDeMotivoEspecifico: datosFormulario.tipoDeMotivoEspecifico,
            subTipoDeMotivoEspecifico: datosFormulario.subTipoDeMotivoEspecifico,
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

  onMacroMotivoChange(event: any): void {
    const macroMotivo: MacroMotivo = this.listaDeMotivos.find(valor => valor.descripcion.includes(event))!;

    if (macroMotivo) {
      this.motivosGeneral = macroMotivo.motivosGenerales
    } else {
      this.motivosGeneral = [];
    }
  }

  onMotivoGeneralChange(event: any): void {
    const motivoGeneral: MotivoGeneral = this.motivosGeneral.find(valor => valor.descripcion.includes(event))!;

    if (motivoGeneral) {
      this.motivosEspecifico = motivoGeneral.motivosEspecificos
    } else {
      this.motivosEspecifico = [];
    }
  }

  onMotivoEspecificoChange(event: any): void {
    const motivoEspecifico: MotivoEspecifico = this.motivosEspecifico.find(valor => valor.descripcion.includes(event))!;

    if (motivoEspecifico) {
      this.tipoMotivoEspecifico = motivoEspecifico.tiposMotivosEspecificos
    } else {
      this.tipoMotivoEspecifico = [];
    }
  }

  onTiposMotivoEspecificoChange(event: any): void {
    const tiposMotivoEspecifico: TipoMotivoEspecifico = this.tipoMotivoEspecifico.find(valor => valor.descripcion.includes(event))!;

    if (tiposMotivoEspecifico) {
      if(tiposMotivoEspecifico.subtipo){
        console.log("hola ",tiposMotivoEspecifico.subtipo)
        this.subtipoMotivoEspecifico = [{codigo: tiposMotivoEspecifico.subtipo, descripcion:tiposMotivoEspecifico.descripcion}];
      }else{
        this.subtipoMotivoEspecifico = tiposMotivoEspecifico.subtiposMotivosEspecificos!
      
      }
      
    } else {
      this.subtipoMotivoEspecifico = [];
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
