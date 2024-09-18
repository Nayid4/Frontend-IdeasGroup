
export interface Usuario {
    id: string,
    nombres: string,
    apellidos: string,
    correo: string,
    idSistema: string,
    rolAsignado: string,
    estado: string
}

export interface UsuarioRegistro {
    nombres: string,
    apellidos: string,
    correo: string,
    contrasena: string,
    idSistema: string,
    rolAsignado: string,
    estado: string
}

