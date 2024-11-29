export interface ListaOpciones {
    id: number,
    icono: string,
    titulo: string,
    url: string,
    opciones: Opciones[]
}

export interface Opciones {
    id: number,
    icono: string,
    titulo: string,
    url: string
}

export interface Opcion {
    id: number,
    titulo: string,
    icono: string,
    ruta: string,
    descripcion: string,
}