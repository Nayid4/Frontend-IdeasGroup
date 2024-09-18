import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSistemaComponent } from './formulario-sistema.component';

describe('FormularioSistemaComponent', () => {
  let component: FormularioSistemaComponent;
  let fixture: ComponentFixture<FormularioSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSistemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
