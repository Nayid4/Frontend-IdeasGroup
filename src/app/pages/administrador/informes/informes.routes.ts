import { Routes } from "@angular/router";
import { InformesLayoutComponent } from "./informes-layout/informes-layout.component";
import { GenerarInformesComponent } from "./generar-informes/generar-informes.component";
import { InformeTrimestralComponent } from "./informe-trimestral/informe-trimestral.component";

export const INFORMES_ROUTES: Routes = [
    {
        path: '',
        component: InformesLayoutComponent,
        children: [
            { path: 'informe-trimestral', component: InformeTrimestralComponent },
            { path: 'generar-informe', component: GenerarInformesComponent }
        ]
    }
]