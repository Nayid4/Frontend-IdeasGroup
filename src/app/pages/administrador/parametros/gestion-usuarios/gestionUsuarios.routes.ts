import { Routes } from "@angular/router";
import { GestionUsuariosLayoutComponent } from "./gestion-usuarios-layout/gestion-usuarios-layout.component";
import { ListaUsuarioComponent } from "./lista-usuario/lista-usuario.component";
import { FormularioUsuarioComponent } from "./formulario-usuario/formulario-usuario.component";

export const GESTION_USUARIOS_ROUTES: Routes = [
    {
        path: '',
        component: GestionUsuariosLayoutComponent,
        children: [
            { path: '', component: ListaUsuarioComponent },
            { path: 'registrar-usuario', component: FormularioUsuarioComponent },
            { path: 'actualizar-usuario/:id', component: FormularioUsuarioComponent }
        ]
    }
]