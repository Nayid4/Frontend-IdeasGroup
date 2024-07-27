import { Institucion } from "./institucion.model";

export interface Usuario {
    id: string,
    identificacion: number,
    nombre: string,
    nombreDeUsuario: string,
    rolUsuario: string,
    correo: string,
    contrasena: string,
    estado: string,
    institucion: Institucion
}

export interface UsuarioRegistro {
    identificacion: number,
    nombre: string,
    nombreDeUsuario: string,
    rolUsuario: string,
    correo: string,
    contrasena: string,
    estado: string,
    departamento: string,
    municipio: string,
    tipoDeSecretaria: string,
    nombreInstitucion: string
}

