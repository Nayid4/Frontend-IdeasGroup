import { Routes } from "@angular/router";
import { GestionUsuariosComponent } from "./gestion-usuarios/gestion-usuarios.component";
import { GestionEmpresaComponent } from "./gestion-empresa/gestion-empresa.component";
import { GestionGeneralesComponent } from "./gestion-generales/gestion-generales.component";
import { ParametrosLayoutComponent } from "./parametros-layout/parametros-layout.component";

export const PARAMETROS_ROUTES: Routes = [
    {
        path: '',
        component: ParametrosLayoutComponent,
        children: [
            { path: 'usuario', component: GestionUsuariosComponent },
            { path: 'empresa', component: GestionEmpresaComponent },
            { path: 'general', component: GestionGeneralesComponent }
        ]
    }
    
]