export interface DatosUsuario {
    id: string,
    nombres: string,
    apellidos: string,
    correo: string,
    idProducto: string,
    idRol: string
}

export interface DatosUsuarioRegistro {
    identificacion: number,
    nombre: string,
    nombreDeUsuario: string,
    rol: string
}