import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'autenticacion',
        loadChildren: () => import('./pages/autenticacion/autenticacion.routes').then(m => m.AUTENTICACION_ROUTES)
    },
    {
        path: 'inicio',
        loadChildren: () => import('./pages/usuario/usuario.routes').then(m => m.USUAIRIO_ROUTES)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/administrador/Administrador.routes').then(m => m.ADMINISTRADOR_ROUTES)
    }
];
