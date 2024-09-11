import { Routes } from "@angular/router";
import { PqrdLayoutComponent } from "./pqrd-layout/pqrd-layout.component";
import { ConsultarPQRDComponent } from "./consultar-pqrd/consultar-pqrd.component";
import { FormularioPqrdComponent } from "./registrar-pqrd/formulario-pqrd/formulario-pqrd.component";

export const PQRS_ROUTES: Routes = [
    {
        path: '',
        component: PqrdLayoutComponent,
        children: [
            { path: 'listar-pqrd', component: ConsultarPQRDComponent },
            { path: 'nuevo-pqrd', component: FormularioPqrdComponent },
            { path: 'editar-pqrd/:id', component: FormularioPqrdComponent }
        ]
    }
]