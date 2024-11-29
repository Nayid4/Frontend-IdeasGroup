
export interface Usuario {
    id: string,
    nombres: string,
    apellidos: string,
    correo: string,
    idSistema: string,
    idRolAsignado: string,
    estado: string
}

export interface UsuarioRegistro {
    nombres: string,
    apellidos: string,
    correo: string,
    contrasena: string,
    idSistema: string,
    idRolAsignado: string,
    estado: string
}

