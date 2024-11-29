import { Routes } from '@angular/router';
import { usuarioNoAutenticadoGuard } from './core/guards/usuario-no-autenticado.guard';
import { usuarioAutenticadoGuard } from './core/guards/usuario-autenticado.guard';

export const routes: Routes = [
    {
        path: 'autenticacion',
        canActivate: [usuarioNoAutenticadoGuard],
        loadChildren: () => import('./pages/autenticacion/autenticacion.routes').then(m => m.AUTENTICACION_ROUTES)
    },
    {
        path: 'dashboard',
        canActivate: [usuarioAutenticadoGuard],
        loadChildren: () => import('./pages/usuario/usuario.routes').then(m => m.USUARIO_ROUTES)
    },
    {
        path: '',
        redirectTo: 'autenticacion/iniciar-sesion',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'autenticacion/iniciar-sesion'
    }
];
