import { Routes } from "@angular/router";
import { GestionRolesLayoutComponent } from "./gestion-roles-layout/gestion-roles-layout.component";
import { ListaRolComponent } from "./lista-rol/lista-rol.component";
import { FormularioRolComponent } from "./formulario-rol/formulario-rol.component";

export const GESTION_ROLES_ROUTES: Routes = [
    {
        path: '',
        component: GestionRolesLayoutComponent,
        children: [
            { path: '', component: ListaRolComponent },
            { path: 'registrar-rol', component: FormularioRolComponent },
            { path: 'actualizar-rol/:id', component: FormularioRolComponent }
        ]
    }
]