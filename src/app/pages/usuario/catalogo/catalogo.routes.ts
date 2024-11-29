import { Routes } from "@angular/router";
import { GestionSistemasLayoutComponent } from "./GestionSistemas/gestion-sistemas-layout/gestion-sistemas-layout.component";

export const CATALOGO_ROUTES: Routes = [
    {
        path: '',
        component: GestionSistemasLayoutComponent,
        children: [
            { path: 'sistema', loadChildren: () => import('./GestionSistemas/GestionSistemas.routes').then(m => m.GESTION_SISTEMA_ROUTES) },
            
            
        ]
    }
]