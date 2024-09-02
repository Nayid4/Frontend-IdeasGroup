import { Routes } from '@angular/router';
import { autenticadoGuard } from './core/guards/autenticado.guard';
import { usuarioGuard } from './core/guards/usuario.guard';
import { administradorGuard } from './core/guards/administrador.guard';
import { noAutenticadoGuard } from './core/guards/no-autenticado.guard';

export const routes: Routes = [
    {
        path: 'autenticacion',
        canActivate: [noAutenticadoGuard],
        loadChildren: () => import('./pages/autenticacion/autenticacion.routes').then(m => m.AUTENTICACION_ROUTES)
    },
    {
        path: 'inicio',
        canActivate: [noAutenticadoGuard],
        loadChildren: () => import('./pages/usuario/usuario.routes').then(m => m.USUAIRIO_ROUTES)
    },
    {
        path: 'dashboard',
        canActivate: [autenticadoGuard],
        loadChildren: () => import('./pages/administrador/Administrador.routes').then(m => m.ADMINISTRADOR_ROUTES)
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'inicio'
    }
];
