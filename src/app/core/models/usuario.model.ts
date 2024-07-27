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

