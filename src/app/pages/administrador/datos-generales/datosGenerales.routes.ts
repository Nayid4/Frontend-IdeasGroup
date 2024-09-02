import { Routes } from "@angular/router";
import { DatosGeneralesLayoutComponent } from "./datos-generales-layout/datos-generales-layout.component";

export const DATOSGENERALES_ROUTES: Routes = [
    {
        path: '',
        component: DatosGeneralesLayoutComponent,
        children: [
            { path: 'eapb', loadChildren: () => import('./gestion-eapb/gestionEAPB.routes').then(m => m.GESTION_EAPB_ROUTES) },
            { path: 'ips', loadChildren: () => import('./gestion-ips/gestionIPS.routes').then(m => m.GESTION_IPS_ROUTES) },
            { path: 'enfermedades/:tipo', loadChildren: () => import('./gestion-de-enfermedades/gestionEnfermedad.routes').then(m => m.GESTION_ENFERMEDAD_ROUTES) }
        ]
    }
]