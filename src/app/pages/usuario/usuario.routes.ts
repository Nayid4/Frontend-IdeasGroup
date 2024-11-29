import { Routes } from "@angular/router";
import { UsuarioLayoutComponent } from "./usuario-layout/usuario-layout.component";

export const USUARIO_ROUTES: Routes = [
    {
        path: '',
        component: UsuarioLayoutComponent,
        children: [
            { path: 'administracion', loadChildren: () => import('./administracion/administracion.routes').then(a => a.ADMINISTRACION_ROUTES) },
            { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.routes').then(a => a.CATALOGO_ROUTES) }
        ]
    }
]