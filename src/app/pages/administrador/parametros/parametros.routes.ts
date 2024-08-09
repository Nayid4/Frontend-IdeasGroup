import { Routes } from "@angular/router";
import { GestionEmpresaComponent } from "./gestion-empresa/gestion-empresa.component";
import { GestionGeneralesComponent } from "./gestion-generales/gestion-generales.component";
import { ParametrosLayoutComponent } from "./parametros-layout/parametros-layout.component";

export const PARAMETROS_ROUTES: Routes = [
    {
        path: '',
        component: ParametrosLayoutComponent,
        children: [
            { path: 'usuario', loadChildren: () => import('./gestion-usuarios/gestionUsuarios.routes').then(m => m.GESTION_USUARIOS_ROUTES) },
            { path: 'empresa', component: GestionEmpresaComponent },
            { path: 'general', component: GestionGeneralesComponent }
        ]
    }
    
]