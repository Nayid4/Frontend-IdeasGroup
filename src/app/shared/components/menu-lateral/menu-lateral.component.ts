// menu-lateral.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ListaOpciones } from '../../../core/models/listaOpciones.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [AccordionModule, CommonModule, RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})

export class MenuLateralComponent {

  @Input() isMenuVisible!: boolean;
  @Output() toggleMenu = new EventEmitter<void>();
  selectedOption: string | null = "Inicio";
  selectedAccordionOption: string | null = null;

  cambiarEstado(){
    this.isMenuVisible = !this.isMenuVisible
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.selectedAccordionOption = null;
    this.clearFocus();
  }

  handleToggle(event: any, opcion: any): void {
    const headerElement = event.originalEvent.target.closest('.p-accordion-header');

    // Establecer selectedOption al título del acordeón que se está expandiendo
    this.selectedOption = opcion.titulo;

    // Si se colapsa el acordeón, verificamos si no hay opciones seleccionadas
    if (event.collapsed) {
        const hasSelectedOptions = this.hasSelectedOptions(opcion.opciones);
        
        // Si no hay opciones seleccionadas, restablecemos selectedOption a null
        if (!hasSelectedOptions) {
            this.clearFocus(); // Limpia el foco de otros elementos
            this.selectedOption = null; // Eliminar el enfoque de "Inicio"
            headerElement.classList.remove('expanded');
        } else {
            headerElement.classList.add('expanded');
        }
    } else {
        this.clearFocus(); // Limpia el foco de otros elementos
        headerElement.classList.remove('expanded'); // Elimina el foco al abrir el contenido
    }
}


  clearFocus(): void {
    const allHeaders = document.querySelectorAll('.p-accordion-header');
    allHeaders.forEach(header => {
      header.classList.remove('expanded');
    });
  }


  handleOptionClick(event: any, op: any): void {
    this.selectedOption = op.titulo;
    this.selectedAccordionOption = op.titulo;

    // Eliminar la clase "selected" de todas las opciones
    const allOptions = document.querySelectorAll('.p-accordion .p-accordion-content a');
    allOptions.forEach(option => {
        option.classList.remove('selected');
    });

    // Agregar la clase "selected" a la opción seleccionada
    event.target.classList.add('selected');

    // Limpiar el enfoque de todos los encabezados
    const allHeaders = document.querySelectorAll('.p-accordion-header');
    allHeaders.forEach(header => {
        header.classList.remove('expanded');
    });

    // Eliminar el enfoque de "Inicio"
    this.selectedOption = null;
    this.clearFocus();
}


  

  hasSelectedOptions(opciones: any[]): boolean {
    return opciones.some(op => this.selectedOption === op.titulo);
  }

  listaOpciones: ListaOpciones[] = [
    {
      id: 1,
      icono: "pi pi-home", // Icono de Inicio
      titulo: "Inicio",
      url: "/dashboard",
      opciones: []
    },
    {
      id: 2,
      icono: "pi pi-cog", // Icono de Parámetros
      titulo: "Parametros",
      url: "",
      opciones: [
        {
          id: 21,
          icono: "pi pi-building", // Icono de Empresa
          titulo: "Empresa",
          url: "/dashboard/parametros/empresa",
        },
        {
          id: 22,
          icono: "pi pi-users", // Icono de Usuarios
          titulo: "Usuarios",
          url: "/dashboard/parametros/usuario",
        },
        {
          id: 23,
          icono: "pi pi-sliders-h", // Icono de Generales
          titulo: "Generales",
          url: "/dashboard/parametros/general",
        }
      ]
    },
    {
      id: 3,
      icono: "pi pi-folder-open", // Icono de Datos Básicos
      titulo: "Datos Basicos",
      url: "",
      opciones: [
        {
          id: 31,
          icono: "pi pi-home", // Icono de Empresa (EAPB)
          titulo: "Empresa (EAPB)",
          url: "/dashboard/datos-generales/eapb",
        },
        {
          id: 32,
          icono: "pi pi-building", // Icono de Empresas (IPS)
          titulo: "Empresas (IPS)",
          url: "/dashboard/datos-generales/ips",
        },
        {
          id: 33,
          icono: "pi pi-heart", // Icono de Enfermedades Huérfanas
          titulo: "Enf. Huérfanas",
          url: "/dashboard/datos-generales/enfermedades-huerfanas",
        },
        {
          id: 34,
          icono: "pi pi-heart", // Icono de Enfermedades Catastróficas
          titulo: "Enf. Catastroficas",
          url: "/dashboard/datos-generales/enfermedades-catastroficas",
        }
      ]
    },
    {
      id: 4,
      icono: "pi pi-list", // Icono de PQRD
      titulo: "PQRD",
      url: "",
      opciones: [
        {
          id: 41,
          icono: "pi pi-file", // Icono de Lista de PQRD
          titulo: "Lista de PQRD",
          url: "/dashboard/pqrd/listar-pqrd",
        },
        {
          id: 42,
          icono: "pi pi-plus", // Icono de Nuevo PQRD
          titulo: "Nuevo PQRD",
          url: "/dashboard/pqrd/nuevo-pqrd",
        }
      ]
    },
    {
      id: 5,
      icono: "pi pi-chart-bar", // Icono de Estadísticas
      titulo: "Estadísticas",
      url: "",
      opciones: [
        {
          id: 51,
          icono: "pi pi-users", // Icono de Grupos Etarios
          titulo: "Grupos Etarios",
          url: "/dashboard/estadisticas/grupos-etarios",
        },
        {
          id: 52,
          icono: "pi pi-chart-line", // Icono de PQRD Entidad
          titulo: "PQRD Entidad",
          url: "/dashboard/estadisticas/pqrd-entidad",
        },
        {
          id: 53,
          icono: "pi pi-chart-line", // Icono de PQRD por Estados
          titulo: "PQRD por Estados",
          url: "/dashboard/estadisticas/pqrd-por-estados",
        },
        {
          id: 54,
          icono: "pi pi-star", // Icono de EAPB con más PQRD
          titulo: "EAPB con más PQRD",
          url: "/dashboard/estadisticas/eapb-mayor-pqrd",
        }
      ]
    },
    {
      id: 6,
      icono: "pi pi-file", // Icono de Informes
      titulo: "Informes",
      url: "",
      opciones: [
        {
          id: 61,
          icono: "pi pi-calendar", // Icono de Informe Trimestral
          titulo: "Informe Trimestral",
          url: "/dashboard/informes/informe-trimestral",
        },
        {
          id: 62,
          icono: "pi pi-download", // Icono de Generar Informes
          titulo: "Generar Informes",
          url: "/dashboard/informes/generar-informe",
        }
      ]
    }
  ]
  
}
