import { Routes } from "@angular/router";
import { DatosGeneralesLayoutComponent } from "./datos-generales-layout/datos-generales-layout.component";
import { GestionEAPBComponent } from "./gestion-eapb/gestion-eapb.component";
import { GestionIPSComponent } from "./gestion-ips/gestion-ips.component";
import { GestionEnfermedadesHuerfanasComponent } from "./gestion-enfermedades-huerfanas/gestion-enfermedades-huerfanas.component";
import { GestionEnfermedadesCatastroficasComponent } from "./gestion-enfermedades-catastroficas/gestion-enfermedades-catastroficas.component";

export const DATOSGENERALES_ROUTES: Routes = [
    {
        path: '',
        component: DatosGeneralesLayoutComponent,
        children: [
            { path: 'eapb', component: GestionEAPBComponent },
            { path: 'ips', component: GestionIPSComponent },
            { path: 'enfermedades-huerfanas', component: GestionEnfermedadesHuerfanasComponent }, 
            { path: 'enfermedades-catastroficas', component: GestionEnfermedadesCatastroficasComponent }
        ]
    }
]