import { Component, Input, OnInit } from '@angular/core';
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
  @Input() aspectosGenerales!: AspectoGeneralDePQRD
  formularioAspectosGenerales!: FormGroup;
  listaIPS: IPS[] = []
  listaEAPB: EAPB[] = []
  filteredEAPBs: EAPB[] = [];
  filteredIPSs: IPS[] = [];

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

  MediosDeExpresion: {id: number, tipo: string}[] = [
    {
      id: 1,
      tipo: "Correo Electronico"
    },
    {
      id: 2,
      tipo: "Pagina Web"
    },
    {
      id: 3,
      tipo: "Telefono"
    },
    {
      id: 4,
      tipo: "Verbal"
    },
    {
      id: 5,
      tipo: "Escrita"
    },
    {
      id: 6,
      tipo: "Otro"
    }
  ]

  tiposDeTecnologias: {id: number, tipo: string}[] = [
    {
      id: 1,
      tipo: "POS"
    },
    {
      id: 2,
      tipo: "NO POS"
    }
  ]

  Empresas: {id: number, tipo: string}[] = [
    {
      id: 1,
      tipo: "EAPB"
    },
    {
      id: 2,
      tipo: "IPS"
    }
  ]

  clasificaciones: {id: number, tipo: string}[] = [
    {
      id: 1,
      tipo: "Petición"
    },
    {
      id: 2,
      tipo: "Queja"
    },
    {
      id: 3,
      tipo: "Reclamo"
    },
    {
      id: 4,
      tipo: "Denuncia"
    }
  ]

  // Listas de motivos específicos, generales y macro motivos
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

  // Variables seleccionadas
  selectedMotivoEspecifico!: MotivoEspecifico;
  selectedMotivoGeneral!: MotivoGeneral;
  selectedMacroMotivo!: MacroMotivo;

  constructor(
    private fb: FormBuilder,
    private ipsServicio: IpsService,
    private eapbServicio: EapbService
  ) {}

  ngOnInit(): void {
    this.cargarFormulario()
    this.eapbServicio.ListarPorEstado("Activo").subscribe({
      next: (valor) => {
        this.listaEAPB = valor
        this.filteredEAPBs = valor;
      }
    })

    this.ipsServicio.ListarPorEstado("Activo").subscribe({
      next: (valor) => {
        this.listaIPS = valor
        this.filteredIPSs = valor;
      }
    })
  }

  cargarFormulario(){
    this.formularioAspectosGenerales = this.fb.group({
      // Usuario PQRD
      tipoDocumento: ['', Validators.required],
      documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      estadoUsuario: ['', Validators.required],

      // Fundamento PQRD
      descripcion: ['', Validators.required],
      documentoFundamento: ['', Validators.required],
      medioDeExpresion: ['', Validators.required],
      tipoDeTecnologia: ['', Validators.required],
      entidadDenunciada: ['', Validators.required],
      idEntidadDenunciada: ['', Validators.required],
      estadoFundamento: ['', Validators.required],

      // Tipología PQRD
      motivoEspecifico: ['', Validators.required],
      motivoGeneral: ['', Validators.required],
      macroMotivo: ['', Validators.required],
      clasificacionDeLaPQRD: ['', Validators.required],
      estadoTipologia: ['', Validators.required],

      // Otros
      riesgoVital: [false, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formularioAspectosGenerales.valid) {
      console.log(this.formularioAspectosGenerales.value);
      // Llamada al servicio para registrar el aspecto general de PQRD
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

  onMacroMotivoChange(event: any): void {
    this.selectedMacroMotivo = event.value;
  }

  // Listas de motivos generales y macro motivos filtrados
  filteredMotivosEspecificos: MotivoEspecifico[] = [];
  filteredMotivosGenerales: MotivoGeneral[] = [];
  filteredMacroMotivos: MacroMotivo[] = [];

  // No sobrescribir la lista completa de motivos específicos
  filterMotivoEspecifico(event: any): void {
    const query = event.query.toLowerCase();
    this.filteredMotivosEspecificos = this.motivosEspecificos.filter(motivo =>
      motivo.nombre.toLowerCase().includes(query)
    );
  }

  // Actualizar motivos generales cuando cambie el motivo específico
  onMotivoEspecificoChange(event: any): void {
    const selectedMotivoEspecifico = this.formularioAspectosGenerales.value.motivoEspecifico; 
    //console.log(this.formularioAspectosGenerales.value.motivoEspecifico)

    if (selectedMotivoEspecifico) {
      this.filteredMotivosGenerales = selectedMotivoEspecifico.motivosGenerales || [];
      
      console.log(this.filteredMotivosGenerales)

      
    } else {
      this.filteredMotivosGenerales = [];
    }
  }


  onMotivoGeneralChange(event: any): void {
    const selected = event;
    if (selected) {
      this.filteredMacroMotivos = selected.macroMotivos || [];
      this.formularioAspectosGenerales.patchValue({ macroMotivo: null });
    } else {
      this.filteredMacroMotivos = [];
    }
  }

}
