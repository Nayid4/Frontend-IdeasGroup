import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuarioAfectadoComponent } from './formulario-usuario-afectado.component';

describe('FormularioUsuarioAfectadoComponent', () => {
  let component: FormularioUsuarioAfectadoComponent;
  let fixture: ComponentFixture<FormularioUsuarioAfectadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioUsuarioAfectadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioUsuarioAfectadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
