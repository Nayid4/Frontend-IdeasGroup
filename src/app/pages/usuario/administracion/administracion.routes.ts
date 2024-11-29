import { Routes } from "@angular/router";
import { AdministracionLayoutComponent } from "./administracion-layout/administracion-layout.component";

export const ADMINISTRACION_ROUTES: Routes = [
    {
        path: '',
        component: AdministracionLayoutComponent,
        children: [
            { path: 'usuario', loadChildren: () => import('./GestionUsuarios/gestionUsuarios.routes').then(m => m.GESTION_USUARIOS_ROUTES) },
            { path: 'rol', loadChildren: () => import('./GestionRoles/gestionRoles.routes').then(m => m.GESTION_ROLES_ROUTES) },
            
        ]
    }
]