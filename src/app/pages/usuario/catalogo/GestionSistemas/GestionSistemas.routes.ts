import { Routes } from "@angular/router";
import { GestionSistemasLayoutComponent } from "./gestion-sistemas-layout/gestion-sistemas-layout.component";
import { ListaSistemaComponent } from "./lista-sistema/lista-sistema.component";
import { FormularioSistemaComponent } from "./formulario-sistema/formulario-sistema.component";

export const GESTION_SISTEMA_ROUTES: Routes = [
    {
        path: '',
        component: GestionSistemasLayoutComponent,
        children: [
            { path: '', component: ListaSistemaComponent },
            { path: 'registrar-sistema', component: FormularioSistemaComponent },
            { path: 'actualizar-sistema/:id', component: FormularioSistemaComponent }
        ]
    }
]