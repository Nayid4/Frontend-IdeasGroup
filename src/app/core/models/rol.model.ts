export interface Rol {
    id: string,
    nombre: string,
    crear: boolean,
    buscar: boolean,
    actualizar: boolean,
    eliminar: boolean,
    estado: string,
}

export interface RolRegistro {
    nombre: string,
    crear: boolean,
    buscar: boolean,
    actualizar: boolean,
    eliminar: boolean,
    estado: string,
}