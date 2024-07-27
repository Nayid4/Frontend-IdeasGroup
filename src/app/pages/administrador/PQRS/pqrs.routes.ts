import { Routes } from "@angular/router";
import { PqrsLayoutComponent } from "./pqrs-layout/pqrs-layout.component";
import { ConsultarPQRSComponent } from "./consultar-pqrs/consultar-pqrs.component";
import { RegistrarPQRSComponent } from "./registrar-pqrs/registrar-pqrs.component";

export const PQRS_ROUTES: Routes = [
    {
        path: '',
        component: PqrsLayoutComponent,
        children: [
            { path: 'listar-pqrd', component: ConsultarPQRSComponent },
            { path: 'nuevo-pqrd', component: RegistrarPQRSComponent }
        ]
    }
]