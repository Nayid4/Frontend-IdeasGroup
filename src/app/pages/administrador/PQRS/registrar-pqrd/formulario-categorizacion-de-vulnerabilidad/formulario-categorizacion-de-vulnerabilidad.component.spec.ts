import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCategorizacionDeVulnerabilidadComponent } from './formulario-categorizacion-de-vulnerabilidad.component';

describe('FormularioCategorizacioDeVulnerabilidadComponent', () => {
  let component: FormularioCategorizacionDeVulnerabilidadComponent;
  let fixture: ComponentFixture<FormularioCategorizacionDeVulnerabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCategorizacionDeVulnerabilidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCategorizacionDeVulnerabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
