export interface ComandoCrearPQRD {
    codigoRadicacion: string;
    entidadTerritorial: string;
    usuarioAfectado: ComandoCrearUsuarioAfectado;
    vulnerabilidadPQRD: ComandoCrearVulnerabilidadPQRD;
    aspectoGeneralDePQRD: ComandoCrearAspectoGeneralDePQRD;
    tramiteInstitucional: ComandoCrearTramiteInstitucional;
    estado: string;
}

export interface ComandoCrearUsuarioAfectado {
    tipoDocumento: string;
    documento: number;
    nombres: string;
    apellidos: string;
    sexo: string;
    telefono: string;
    direccion: string;
    correo: string;
    regimen: string;
    idEAPB: string; // UUIDs in TypeScript are usually represented as strings
    fechaDeNacimiento: Date;
    zona: string;
    estado: string;
}

export interface ComandoCrearVulnerabilidadPQRD {
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
    estado: string;
}

export interface ComandoCrearAspectoGeneralDePQRD {
    usuarioPQRD: ComandoCrearUsuarioPQRD;
    fundamentoPQRD: ComandoCrearFundamentoPQRD;
    riesgoVital: boolean;
    idTipologiaPQRD: ComandoCrearTipologiaPQRD;
    estado: string;
}

export interface ComandoCrearTramiteInstitucional {
    seguimientos: ComandoCrearSeguimiento[];
    estado: string;
}

export interface ComandoCrearUsuarioPQRD {
    tipoDocumento: string;
    documento: number;
    nombres: string;
    apellidos: string;
    telefono: string;
    correo: string;
    estado: string;
}

export interface ComandoCrearFundamentoPQRD {
    descripcion: string;
    documento: string;
    medioDeExpresion: string;
    tipoDeTecnologia: string;
    entidadDenunciada: string;
    idEntidadDenunciada: string; // UUIDs in TypeScript are usually represented as strings
    estado: string;
}

export interface ComandoCrearTipologiaPQRD {
    motivoEspecifico: string;
    motivoGeneral: string;
    macroMotivo: string;
    clasificacionDeLaPQRD: string;
    estado: string;
}

export interface ComandoCrearSeguimiento {
    tipoSeguimiento: string; // Ejemplo: "SolucionFinal", "TransferenciaDeAsunto", etc.
    idUsuario: string; // UUIDs in TypeScript are usually represented as strings
    transferidoA: string;
    observacion: string;
    estado: string;
}
