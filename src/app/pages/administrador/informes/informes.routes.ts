import { Routes } from "@angular/router";
import { InformesLayoutComponent } from "./informes-layout/informes-layout.component";
import { GenerarInformesComponent } from "./generar-informes/generar-informes.component";

export const INFORMES_ROUTES: Routes = [
    {
        path: '',
        component: InformesLayoutComponent,
        children: [
            { path: 'informe-trimestral', component: InformesLayoutComponent },
            { path: 'generar-informe', component: GenerarInformesComponent }
        ]
    }
]