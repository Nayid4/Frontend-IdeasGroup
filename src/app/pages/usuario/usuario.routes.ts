import { Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { UsuarioLayoutComponent } from "./usuario-layout/usuario-layout.component";
import { RealizarPQRSComponent } from "./realizar-pqrs/realizar-pqrs.component";
import { ConsultarPQRSComponent } from "./consultar-pqrs/consultar-pqrs.component";

export const USUAIRIO_ROUTES: Routes = [
    { 
        path: '', 
        component: UsuarioLayoutComponent,
        children: [
            { path: '', component: InicioComponent },
            { path: 'realizar-pqrs', component: RealizarPQRSComponent },
            { path: 'consultar-pqrs', component: ConsultarPQRSComponent }
        ]
    },
]