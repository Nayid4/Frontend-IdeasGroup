export interface RespuestaPQRD {
    id: string,
    codigoRadicacion: string;
    entidadTerritorial: string;
    usuarioAfectado: RespuestaUsuarioAfectado;
    vulnerabilidadPQRD: RespuestaVulnerabilidadPQRD;
    aspectoGeneralDePQRD: RespuestaAspectoGeneralDePQRD;
    tramiteInstitucional: RespuestaTramiteInstitucional;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
}

export interface RespuestaUsuarioAfectado {
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
    fechaDeNacimiento: Date;
    zona: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
}

export interface RespuestaVulnerabilidadPQRD {
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
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
}



export interface RespuestaSeguimiento {
    id: string;
    idTramiteInstitucional: string;
    idUsuario: string;
    tipoDeSeguimiento: string;
    transferidoA: string;
    observacion: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
}

export interface RespuestaTramiteInstitucional {
    id: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
    seguimientos: RespuestaSeguimiento[];
}

export interface RespuestaAspectoGeneralDePQRD {
    id: string;
    usuarioPQRD: RespuestaUsuarioPQRD;
    fundamentoPQRD: RespuestaFundamentoPQRD;
    riesgoVital: boolean;
    idTipologiaPQRD: RespuestaTipologiaPQRD;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
}

export interface RespuestaUsuarioPQRD {
    id: string;
    tipoDocumento: string;
    documento: number;
    nombres: string;
    apellidos: string;
    telefono: string;
    correo: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
}

export interface RespuestaFundamentoPQRD {
    id: string;
    descripcion: string;
    documento: string;
    medioDeExpresion: string;
    tipoDeTecnologia: string;
    entidadDenunciada: string;
    idEntidadDenunciada: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
}

export interface RespuestaTipologiaPQRD {
    id: string;
    motivoEspecifico: string;
    motivoGeneral: string;
    macroMotivo: string;
    clasificacionDeLaPQRD: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: string;
}
