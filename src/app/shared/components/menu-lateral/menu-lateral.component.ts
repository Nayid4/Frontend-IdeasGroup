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
      id: 2,
      icono: "pi pi-cog", // Icono de Parámetros
      titulo: "Administracion",
      url: "",
      opciones: [
        {
          id: 21,
          icono: "pi pi-building", // Icono de Empresa
          titulo: "Usuarios",
          url: "/dashboard/administracion/usuario",
        },
        {
          id: 22,
          icono: "pi pi-users", // Icono de Usuarios
          titulo: "Roles",
          url: "/dashboard/administracion/rol",
        }
      ]
    },
    {
      id: 3,
      icono: "pi pi-folder-open", // Icono de Datos Básicos
      titulo: "Catalogos",
      url: "",
      opciones: [
        {
          id: 31,
          icono: "pi pi-home", // Icono de Empresa (EAPB)
          titulo: "Sistemas",
          url: "/dashboard/catalogo/sistema",
        }
      ]
    }
  ]
  
}
