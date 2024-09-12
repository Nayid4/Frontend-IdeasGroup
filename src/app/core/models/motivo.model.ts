export interface SubtipoMotivoEspecifico {
    codigo: string;
    descripcion: string;
  }
  
export interface TipoMotivoEspecifico {
    codigo: string;
    subtipo: string | null;
    descripcion: string;
    subtiposMotivosEspecificos?: SubtipoMotivoEspecifico[];
  }
  
export interface MotivoEspecifico {
    codigo: string;
    descripcion: string;
    tiposMotivosEspecificos: TipoMotivoEspecifico[];
  }
  
export interface MotivoGeneral {
    codigo: string;
    descripcion: string;
    motivosEspecificos: MotivoEspecifico[];
  }
  
export interface MacroMotivo {
    macromotivo: string;
    descripcion: string;
    motivosGenerales: MotivoGeneral[];
  }