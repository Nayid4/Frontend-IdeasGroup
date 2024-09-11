// Interfaz para UsuarioAfectado
export interface UsuarioAfectado {
    id: string;
    tipoDocumento: string;
    documento: number;
    nombres: string;
    apellidos: string;
    sexo: string;
    telefono: string;
    direccion: string;
    correo: string;
    regimen: string;
    idEAPB: string;
    fechaDeNacimiento: string; // Puede ser Date si se prefiere manejar como objeto Date
    zona: string;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
}

// Interfaz para VulnerabilidadPQRD
export interface VulnerabilidadPQRD {
    id: string;
    afrodescendiente: boolean;
    madreGestante: boolean;
    habitanteDeCalle: boolean;
    poblacionLGBTI: boolean;
    poblacionIndigena: boolean;
    poblacionROM: boolean;
    victimaDelConflictoArmado: boolean;
    personaEnProstitucion: boolean;
    personaEnCondicionDeAbandono: boolean;
    personaConDiscapacidad: boolean;
    personaConEnfermedadMental: boolean;
    personaDeEspecialProteccion: boolean;
    personaConEnfermedadHuerfana: boolean;
    personaConEnfermedadCatastrofica: boolean;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
    }

    // Interfaz para UsuarioPQRD
    export interface UsuarioPQRD {
    id: string;
    tipoDocumento: string;
    documento: number;
    nombres: string;
    apellidos: string;
    telefono: string;
    correo: string;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
}

// Interfaz para FundamentoPQRD
export interface FundamentoPQRD {
    id: string;
    descripcion: string;
    documento: string;
    medioDeExpresion: string;
    tipoDeTecnologia: string;
    entidadDenunciada: string;
    idEntidadDenunciada: string;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
}

// Interfaz para IdTipologiaPQRD
export interface IdTipologiaPQRD {
    id: string;
    motivoEspecifico: string;
    motivoGeneral: string;
    macroMotivo: string;
    clasificacionDeLaPQRD: string;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
}

// Interfaz para Seguimiento
export interface Seguimiento {
    id: string;
    idTramiteInstitucional: string;
    idUsuario: string;
    tipoDeSeguimiento: string;
    transferidoA: string;
    observacion: string;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
}

// Interfaz para TramiteInstitucional
export interface TramiteInstitucional {
    id: string;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
    seguimientos: Seguimiento[];
}

// Interfaz para AspectoGeneralDePQRD
export interface AspectoGeneralDePQRD {
    id: string;
    usuarioPQRD: UsuarioPQRD;
    fundamentoPQRD: FundamentoPQRD;
    riesgoVital: boolean;
    idTipologiaPQRD: IdTipologiaPQRD;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
}

// Interfaz principal para PQRD
export interface PQRD {
    id: string;
    codigoRadicacion: string;
    entidadTerritorial: string;
    usuarioAfectado: UsuarioAfectado;
    vulnerabilidadPQRD: VulnerabilidadPQRD;
    aspectoGeneralDePQRD: AspectoGeneralDePQRD;
    tramiteInstitucional: TramiteInstitucional;
    fechaCreacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    fechaActualizacion: string; // Puede ser Date si se prefiere manejar como objeto Date
    estado: string;
}
