import { Route } from "@angular/router";
import { GestionEnfermedadLayoutComponent } from "./gestion-enfermedad-layout/gestion-enfermedad-layout.component";
import { ListaEnfermedadComponent } from "./lista-enfermedad/lista-enfermedad.component";
import { FormularioEnfermedadComponent } from "./formulario-enfermedad/formulario-enfermedad.component";

export const GESTION_ENFERMEDAD_ROUTES: Route[] = [
    {
        path: '',
        component: GestionEnfermedadLayoutComponent,
        children: [
            { path: '', component: ListaEnfermedadComponent },
            { path: 'registrar-enfermedad/:tipo', component: FormularioEnfermedadComponent },
            { path: 'actualizar-enfermedad/:tipo/:id', component: FormularioEnfermedadComponent }
        ]
    }
]