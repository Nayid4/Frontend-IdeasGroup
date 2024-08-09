import { Route } from "@angular/router";
import { GestionIPSLayoutComponent } from "./gestion-ipslayout/gestion-ipslayout.component";
import { ListaIPSComponent } from "./lista-ips/lista-ips.component";
import { FormularioIPSComponent } from "./formulario-ips/formulario-ips.component";


export const GESTION_IPS_ROUTES: Route[] = [
    { 
        path: '',
        component: GestionIPSLayoutComponent,
        children: [
            { path: '', component: ListaIPSComponent },
            { path: 'registrar-ips', component: FormularioIPSComponent },
            { path: 'actualizar-ips/:id', component: FormularioIPSComponent }
        ]
    }
]