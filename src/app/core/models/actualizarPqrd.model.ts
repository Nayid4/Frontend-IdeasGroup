export interface ComandoActualizarPQRD {
    id: string;
    codigoRadicacion: string;
    entidadTerritorial: string;
    usuarioAfectado: ComandoActualizarUsuarioAfectado;
    vulnerabilidadPQRD: ComandoActualizarVulnerabilidadPQRD;
    aspectoGeneralDePQRD: ComandoActualizarAspectoGeneralDePQRD;
    estado: string;
}

export interface ComandoActualizarUsuarioAfectado {
    id: string,
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

export interface ComandoActualizarVulnerabilidadPQRD {
    id: string,
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

export interface ComandoActualizarAspectoGeneralDePQRD {
    id: string,
    usuarioPQRD: ComandoActualizarUsuarioPQRD;
    fundamentoPQRD: ComandoActualizarFundamentoPQRD;
    riesgoVital: boolean;
    idTipologiaPQRD: ComandoActualizarTipologiaPQRD;
    estado: string;
}



export interface ComandoActualizarUsuarioPQRD {
    id: string,
    tipoDocumento: string;
    documento: number;
    nombres: string;
    apellidos: string;
    telefono: string;
    correo: string;
    estado: string;
}

export interface ComandoActualizarFundamentoPQRD {
    id: string,
    descripcion: string;
    documento: string;
    medioDeExpresion: string;
    tipoDeTecnologia: string;
    entidadDenunciada: string;
    idEntidadDenunciada: string; // UUIDs in TypeScript are usually represented as strings
    estado: string;
}

export interface ComandoActualizarTipologiaPQRD {
    id: string,
    motivoEspecifico: string;
    motivoGeneral: string;
    macroMotivo: string;
    clasificacionDeLaPQRD: string;
    estado: string;
}
