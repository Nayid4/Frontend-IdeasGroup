export interface DatosUsuario {
    id: string,
    identificacion: number,
    nombre: string,
    nombreDeUsuario: string,
    rol: string,
    entidadTerritorial: string
}

export interface DatosUsuarioRegistro {
    identificacion: number,
    nombre: string,
    nombreDeUsuario: string,
    rol: string
}