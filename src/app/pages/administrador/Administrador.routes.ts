import { Routes } from "@angular/router";
import { AdministradorLayoutComponent } from "./administrador-layout/administrador-layout.component";
import { InicioDashboardComponent } from "./inicio-dashboard/inicio-dashboard.component";
import { autenticadoGuard } from "../../core/guards/autenticado.guard";

export const ADMINISTRADOR_ROUTES: Routes = [
    { 
        path: '',
        component: AdministradorLayoutComponent,
        canActivateChild: [autenticadoGuard],
        children: [
            { path: '', component: InicioDashboardComponent },
            { path: 'parametros', loadChildren: () => import('./parametros/parametros.routes').then(m => m.PARAMETROS_ROUTES) },
            { path: 'datos-generales', loadChildren: () => import('./datos-generales/datosGenerales.routes').then(m => m.DATOSGENERALES_ROUTES) },
            { path: 'estadisticas', loadChildren: () => import('./estadisticas/estadisticas.routes').then(m => m.ESTADISTICAS_ROUTES) },
            { path: 'informes', loadChildren: () => import('./informes/informes.routes').then(m => m.INFORMES_ROUTES) }
        ] 
    }
]
