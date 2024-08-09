import { Route } from "@angular/router";
import { GestionEAPBLayoutComponent } from "./gestion-eapblayout/gestion-eapblayout.component";
import path from "path";
import { ListaEAPBComponent } from "./lista-eapb/lista-eapb.component";
import { FormularioEAPBComponent } from "./formulario-eapb/formulario-eapb.component";


export const GESTION_EAPB_ROUTES: Route[] = [
    {
        path: '',
        component: GestionEAPBLayoutComponent,
        children: [
            { path: '', component: ListaEAPBComponent },
            { path: 'registrar-eapb', component: FormularioEAPBComponent },
            { path: 'actualizar-eapb/:id', component: FormularioEAPBComponent }
        ]
    }
]