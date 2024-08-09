import { Routes } from "@angular/router";
import { DatosGeneralesLayoutComponent } from "./datos-generales-layout/datos-generales-layout.component";
import { GestionEnfermedadesHuerfanasComponent } from "./gestion-enfermedades-huerfanas/gestion-enfermedades-huerfanas.component";
import { GestionEnfermedadesCatastroficasComponent } from "./gestion-enfermedades-catastroficas/gestion-enfermedades-catastroficas.component";
import { GestionEAPBLayoutComponent } from "./gestion-eapb/gestion-eapblayout/gestion-eapblayout.component";

export const DATOSGENERALES_ROUTES: Routes = [
    {
        path: '',
        component: DatosGeneralesLayoutComponent,
        children: [
            { path: 'eapb', loadChildren: () => import('./gestion-eapb/gestionEAPB.routes').then(m => m.GESTION_EAPB_ROUTES) },
            { path: 'ips', loadChildren: () => import('./gestion-ips/gestionIPS.routes').then(m => m.GESTION_IPS_ROUTES) },
            { path: 'enfermedades-huerfanas', component: GestionEnfermedadesHuerfanasComponent }, 
            { path: 'enfermedades-catastroficas', component: GestionEnfermedadesCatastroficasComponent }
        ]
    }
]