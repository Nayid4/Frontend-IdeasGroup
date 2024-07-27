import { Routes } from "@angular/router";
import { EstadisticasLayoutComponent } from "./estadisticas-layout/estadisticas-layout.component";
import { GruposEtariosComponent } from "./grupos-etarios/grupos-etarios.component";
import { PqrsEntidadComponent } from "./pqrs-entidad/pqrs-entidad.component";
import { PrqsPorEstadosComponent } from "./prqs-por-estados/prqs-por-estados.component";
import { EapbConMayorPqrsComponent } from "./eapb-con-mayor-pqrs/eapb-con-mayor-pqrs.component";

export const ESTADISTICAS_ROUTES: Routes = [
    {
        path: '',
        component: EstadisticasLayoutComponent,
        children: [
            { path: 'grupos-etarios', component: GruposEtariosComponent },
            { path: 'pqrd-entidad', component: PqrsEntidadComponent },
            { path: 'pqrd-por-estados', component: PrqsPorEstadosComponent },
            { path: 'eapb-mayor-pqrd', component: EapbConMayorPqrsComponent }
        ]
    }
]