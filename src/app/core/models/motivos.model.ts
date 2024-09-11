// Definición de tipos
export interface MacroMotivo {
    id: number;
    nombre: string;
  }
  
export interface MotivoGeneral {
    id: number;
    nombre: string;
    macroMotivos: MacroMotivo[]; // Lista de macro motivos relacionados
  }
  
export interface MotivoEspecifico {
    id: number;
    nombre: string;
    motivosGenerales: MotivoGeneral[]; // Lista de motivos generales relacionados
  }